package org.bilinow.backend.auth;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AuthRepository extends JpaRepository<AuthModel, Long> {

    boolean existsByEmail(String email);

    Optional<AuthModel> findByEmail(String email);
}
