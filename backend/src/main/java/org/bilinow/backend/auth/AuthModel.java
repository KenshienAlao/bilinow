package org.bilinow.backend.auth;

import jakarta.persistence.*;
import lombok.*;
import org.bilinow.backend.product.CartModel;
import org.bilinow.backend.profile.ProfileModel;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class AuthModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private ProfileModel profile;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CartModel> cart = new HashSet<>();

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private boolean terms;

    @UpdateTimestamp
    @Column(nullable = false)
    private Instant UpdatedAt;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private Instant createdAt;

    @Builder
    public AuthModel(String email, String password, boolean terms) {
        this.email = email;
        this.password = password;
        this.terms = terms;
    }
}
