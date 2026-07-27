package org.bilinow.backend.auth;


import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.bilinow.backend.common.ApiResponse;
import org.bilinow.backend.config.JwtTokenConfig;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.WebUtils;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
class AuthController {

    private final AuthService authService;
    private final JwtTokenConfig jwtTokenConfig;

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<AuthDto.response>> signup(@Valid @RequestBody AuthDto entity) {

        return ResponseEntity.ok(ApiResponse.success("Success", authService.signup(entity)));
    }

    @PostMapping("/signin")
    public ResponseEntity<ApiResponse<AuthDto.response>> signin(@Valid @RequestBody AuthDto.signin entity) {
        return ResponseEntity.ok(ApiResponse.success("Success", authService.signin(entity)));
    }

    @PostMapping("/refresh")
        public ApiResponse<Void> refresh(HttpServletRequest request, HttpServletResponse response) {
            var cookie = WebUtils.getCookie(request, "bilinow-access_cookie");
            if (cookie == null)
                throw new IllegalArgumentException("Missing refresh token.");

            var accessToken = jwtTokenConfig.generateAccessToken(
                    jwtTokenConfig.extractEmail(cookie.getValue()));

            response.addHeader(
                    HttpHeaders.SET_COOKIE, ResponseCookie.from("bilinow-refresh_cookie", accessToken)
                            .httpOnly(true)
                            .secure(true)
                            .path("/")
                            .maxAge(900)
                            .sameSite("None")
                            .build()
                            .toString() + "; Partitioned");

            return ApiResponse.success("Token refreshed.", null);
        }
}
