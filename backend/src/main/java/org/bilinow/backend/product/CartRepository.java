package org.bilinow.backend.product;

import jakarta.transaction.Transactional;
import org.bilinow.backend.auth.AuthModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CartRepository extends JpaRepository<CartModel, Long> {

    List<CartModel> findAllByUserEmail(String email);

    boolean existsByUserAndProductId(AuthModel user, Integer productId);

    @Modifying
    @Transactional
    @Query("DELETE FROM CartModel w WHERE w.user = :user AND w.productId = :productId")
    void deleteByUserAndProductId(AuthModel user, Integer productId);
}
