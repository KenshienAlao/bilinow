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

    @GetMapping("/wishlist/get")
    public ResponseEntity<ApiResponse<List<Integer>>> getWishListIds() {
        return ResponseEntity.ok(ApiResponse.success("Success", productService.getWishListIds()));
    }

    @PostMapping("/wishlist/add/{productId}")
    public ResponseEntity<ApiResponse<Integer>> addWishlist(@PathVariable Integer productId) {
        return ResponseEntity.ok(ApiResponse.success("Success", productService.addWishList(productId)));
    }

    @DeleteMapping("/wishlist/remove/{productId}")
    public ResponseEntity<ApiResponse<Integer>> removeWishlist(@PathVariable Integer productId) {
        return ResponseEntity.ok(ApiResponse.success("Success", productService.removeWishList(productId)));
    }
}
