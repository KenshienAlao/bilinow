package org.bilinow.backend.product;

import lombok.RequiredArgsConstructor;
import org.bilinow.backend.common.ApiResponse;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<ApiResponse<ProductDto>> get(
            @RequestParam(required = false) Integer limit,
            @RequestParam(required = false) Integer skip,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String q) {
        return ResponseEntity.ok(ApiResponse.success("Success", productService.get(limit, skip, sort, category, q)));
    }

    @Cacheable("products")
    @GetMapping("/{productId}")
    public ResponseEntity<ApiResponse<ProductDto.ProductInfo>> getById(@PathVariable Integer productId) {
        return ResponseEntity.ok(ApiResponse.success("Success", productService.getById(productId)));
    }

    @GetMapping("/cart/get")
    public ResponseEntity<ApiResponse<List<Integer>>> getCartIds() {
        return ResponseEntity.ok(ApiResponse.success("Success", productService.getCartIds()));
    }

    @PostMapping("/cart/add/{productId}")
    public ResponseEntity<ApiResponse<Integer>> addCart(@PathVariable Integer productId) {
        return ResponseEntity.ok(ApiResponse.success("Success", productService.addCart(productId)));
    }

    @DeleteMapping("/cart/remove/{productId}")
    public ResponseEntity<ApiResponse<Integer>> removeCart(@PathVariable Integer productId) {
        return ResponseEntity.ok(ApiResponse.success("Success", productService.removeCart(productId)));
    }
}
