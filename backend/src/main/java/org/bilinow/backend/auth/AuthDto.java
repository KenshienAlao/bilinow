package org.bilinow.backend.auth;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record AuthDto(
        @Size(min = 1, max = 32)
        @NotBlank(message = "First Name is required")
        String firstName,

        @Size(min = 1, max = 32)
        @NotBlank(message = "Last Name is required")
        String lastName,

        @Size(min = 1, max = 32)
        @NotBlank(message = "Email is required")
        String email,

        @Size(min = 1, max = 32)
        @NotBlank(message = "Password is required")
        String password,

        @Size(min = 1, max = 32)
        @NotBlank(message = "Confirm Password is required")
        String confirm,

        @NotNull(message = "Terms is required")
        @AssertTrue(message = "You need to accept the terms and conditions")
        Boolean terms
) {
    public record response(
            String firstName,
            String lastName,
            String email
    ){}
}
