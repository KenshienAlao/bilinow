package org.bilinow.backend.auth;

import lombok.RequiredArgsConstructor;
import org.bilinow.backend.profile.ProfileModel;
import org.bilinow.backend.profile.ProfileRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthRepository authRepository;
    private final ProfileRepository profileRepository;
    private final PasswordEncoder passwordEncoder;

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

}
