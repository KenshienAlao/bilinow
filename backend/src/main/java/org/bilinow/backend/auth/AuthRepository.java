package org.bilinow.backend.auth;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthRepository extends JpaRepository<AuthModel, Long> {

    boolean existsByEmail(String email);
}
