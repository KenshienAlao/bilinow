package org.bilinow.backend.product;

import lombok.RequiredArgsConstructor;
import org.bilinow.backend.auth.AuthRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestClient;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ProductService {

    private final RestClient restClient;
    private final CartRepository cartRepository;
    private final AuthRepository authRepository;

    @Transactional(readOnly = true)
    public ProductDto get(Integer limit, Integer skip, String sort, String category, String q) {
        return restClient.get()
                .uri(uriBuilder -> {
                    if (q != null && !q.isBlank()) {
                        uriBuilder.path("/products/search");
                        uriBuilder.queryParam("q", q);
                    } else if (category != null && !category.isBlank()) {
                        uriBuilder.path("/products/category/" + category);
                    } else {
                        uriBuilder.path("/products");
                    }
                    if (limit != null)
                        uriBuilder.queryParam("limit", limit);
                    if (skip != null)
                        uriBuilder.queryParam("skip", skip);
                    if (sort != null)
                        uriBuilder.queryParam("sort", sort);
                    return uriBuilder.build();
                })
                .retrieve()
                .body(ProductDto.class);
    }

    @Transactional(readOnly = true)
    public ProductDto.ProductInfo getById(Integer id) {
        return restClient.get()
                .uri(uriBuilder -> uriBuilder.path("/products/" + id).build())
                .retrieve()
                .body(ProductDto.ProductInfo.class);
    }

    @Transactional(readOnly = true)
    public List<Integer> getCartIds() {
        var email = SecurityContextHolder.getContext().getAuthentication().getName();

        return cartRepository
                .findAllByUserEmail(email)
                .stream()
                .map(CartModel::getProductId)
                .toList();
    }

    public Integer addCart(Integer productId) {
        var email = SecurityContextHolder.getContext().getAuthentication().getName();

        var user = authRepository.findByEmail(email).orElseThrow(() -> new IllegalArgumentException("User not found"));

        if (cartRepository.existsByUserAndProductId(user, productId)) {
            throw new IllegalStateException("Product already in cart");
        }

        try {
            getById(productId);
        } catch (Exception e) {
            throw new IllegalArgumentException("Product does not exist");
        }

        var result = cartRepository.save(CartModel.builder()
                .user(user).productId(productId).build());
        return result.getProductId();
    }

    public Integer removeCart(Integer productId) {
        var email = SecurityContextHolder.getContext().getAuthentication().getName();
        var user = authRepository.findByEmail(email).orElseThrow(() -> new IllegalArgumentException("User not found"));
        if (!cartRepository.existsByUserAndProductId(user, productId)) {
            throw new IllegalStateException("Product not in cart");
        }

        cartRepository.deleteByUserAndProductId(user, productId);

        return productId;
    }
}
