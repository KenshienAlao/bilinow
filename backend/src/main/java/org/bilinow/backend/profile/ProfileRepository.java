package org.bilinow.backend.profile;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProfileRepository extends JpaRepository<ProfileModel, Long> {
    Optional<ProfileModel> findByUserEmail(String userEmail);
    Optional<ProfileModel> findByUserId(Long userId);
}
