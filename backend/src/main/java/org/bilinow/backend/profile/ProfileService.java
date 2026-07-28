package org.bilinow.backend.profile;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class ProfileService {

    private final ProfileRepository profileRepository;

    @Transactional(readOnly = true)
    public ProfileDto get() {
        var email = SecurityContextHolder.getContext().getAuthentication().getName();

        var result = profileRepository.findByUserEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("profile not found"));

        return new ProfileDto(
                result.getFirstName(),
                result.getLastName());
    }
}
