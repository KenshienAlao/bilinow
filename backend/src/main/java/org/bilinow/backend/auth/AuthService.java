package org.bilinow.backend.auth;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.bilinow.backend.config.JwtTokenConfig;
import org.bilinow.backend.profile.ProfileModel;
import org.bilinow.backend.profile.ProfileRepository;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {

        private final AuthRepository authRepository;
        private final ProfileRepository profileRepository;
        private final PasswordEncoder passwordEncoder;
        private final JwtTokenConfig jwtTokenConfig;
        private final HttpServletResponse response;

        public AuthDto.response signup(AuthDto entity) {
                if (!entity.password().equals(entity.confirm())) {
                        throw new IllegalArgumentException("Password do not match");
                }

                if (authRepository.existsByEmail(entity.email())) {
                        throw new IllegalArgumentException("Email already exist");
                }

                var auth = authRepository.save(AuthModel.builder()
                                .email(entity.email())
                                .password(passwordEncoder.encode(entity.password()))
                                .terms(entity.terms())
                                .build());

                var profile = profileRepository.save(ProfileModel.builder()
                                .user(auth)
                                .firstName(entity.firstName())
                                .lastName(entity.lastName())
                                .build());

                return new AuthDto.response(
                                profile.getFirstName(),
                                profile.getLastName(),
                                auth.getEmail());
        }

        public AuthDto.response signin(AuthDto.signin entity) {
                var user = authRepository.findByEmail(entity.email())
                                .filter(u -> passwordEncoder.matches(entity.password(), u.getPassword()))
                                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

                var profile = profileRepository.findByUserId(user.getId())
                                .orElseThrow(() -> new IllegalArgumentException("User not found"));

                var email = user.getEmail();
                setCookie("bilinow-access_cookie", jwtTokenConfig.generateAccessToken(email), 900);
                setCookie("bilinow-refresh_cookie", jwtTokenConfig.generateRefreshToken(email), 604800);

                return new AuthDto.response(
                                profile.getFirstName(),
                                profile.getLastName(),
                                user.getEmail());
        }

        private void setCookie(String name, String value, long maxAge) {
                response.addHeader(HttpHeaders.SET_COOKIE, ResponseCookie.from(name, value)
                                .httpOnly(true).secure(true).path("/").maxAge(maxAge).sameSite("None").build()
                                + "; Partitioned");
        }

}
