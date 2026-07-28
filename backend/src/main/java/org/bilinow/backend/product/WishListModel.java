package org.bilinow.backend.product;

import jakarta.persistence.*;
import lombok.*;
import org.bilinow.backend.auth.AuthModel;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.Instant;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "wistlist")
public class WishListModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private AuthModel user;

    @Column(nullable = false)
    private Integer productId;

    @CreationTimestamp
    private Instant createdAt;

    @Builder
    public WishListModel(AuthModel user, Integer productId) {
        this.user = user;
        this.productId = productId;
    }
}
