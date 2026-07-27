package org.bilinow.backend.product;

import lombok.RequiredArgsConstructor;
import org.bilinow.backend.common.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<ApiResponse<ProductDto>> get() {
        return ResponseEntity.ok(ApiResponse.success("Success", productService.get()));
    }
}
