package org.bilinow.backend.config;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Bucket;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.Duration;
import java.util.Map;

@Component
public class RateLimitFilter extends OncePerRequestFilter {
    private record RateLimit(int capacity, Duration refill) {
    }

    private final Cache<String, Bucket> buckets = Caffeine.newBuilder()
            .maximumSize(10_000)
            .expireAfterAccess(Duration.ofHours(1))
            .build();

    private final Map<String, RateLimit> limits = Map.of(
            "/api/auth/signin", new RateLimit(5, Duration.ofMinutes(15)),
            "/api/auth/signup", new RateLimit(5, Duration.ofMinutes(15)));

    private Bucket createBucket(RateLimit limit) {
        return Bucket.builder()
                .addLimit(
                        Bandwidth.builder()
                                .capacity(limit.capacity())
                                .refillIntervally(limit.capacity(), limit.refill())
                                .build())
                .build();
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {

        RateLimit limit = limits.get(request.getRequestURI());

        if (limit == null || !request.getMethod().equalsIgnoreCase("POST")) {
            filterChain.doFilter(request, response);
            return;
        }

        String ip = request.getHeader("X-Forwarded-For");

        if (ip != null && !ip.isBlank()) {
            ip = ip.split(",")[0].trim();
        } else {
            ip = request.getRemoteAddr();
        }

        String key = request.getRequestURI() + ":" + ip;

        Bucket bucket = buckets.get(key, k -> createBucket(limit));

        if (!bucket.tryConsume(1)) {
            tooManyRequests(response);
            return;
        }

        filterChain.doFilter(request, response);
    }

    private void tooManyRequests(HttpServletResponse response) throws IOException {
        response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        response.getWriter().write("""
                {
                  "success": false,
                  "message": "Too many requests. Please try again later."
                }
                """);
    }
}
