package org.bilinow.backend.product;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final RestClient restClient;

    public ProductDto get() {
        return restClient.get()
                .uri("/products?limit=0")
                .retrieve()
                .body(ProductDto.class);
    }
}
