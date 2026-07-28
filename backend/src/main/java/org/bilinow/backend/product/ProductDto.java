package org.bilinow.backend.product;

import java.time.Instant;
import java.util.List;

public record ProductDto(
                List<ProductInfo> products,
                Integer total,
                Integer skip,
                Integer limit) {

        public record ProductInfo(
                        Long id,
                        String title,
                        String description,
                        String category,
                        Double price,
                        Double discountPercentage,
                        Double rating,
                        Integer stock,
                        List<String> tags,
                        String brand,
                        String sku,
                        Double weight,
                        Dimension dimensions,
                        String warrantyInformation,
                        String shippingInformation,
                        String availabilityStatus,
                        List<Reviews> reviews,
                        String returnPolicy,
                        Integer minimumOrderQuantity,
                        Meta meta,
                        List<String> images,
                        String thumbnail

        ) {
                public record Meta(
                                String barcode,
                                Instant createdAt,
                                String qrCode,
                                Instant updatedAt) {
                }

                public record Dimension(
                                Double depth,
                                Double height,
                                Double width) {
                }

                public record Reviews(
                                Double rating,
                                String comment,
                                Instant date,
                                String reviewerEmail,
                                String reviewerName) {
                }
        }
}
