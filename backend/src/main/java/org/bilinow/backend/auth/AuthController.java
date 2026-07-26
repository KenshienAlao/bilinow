package org.bilinow.backend.auth;


import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.bilinow.backend.common.apiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<apiResponse<AuthDto.response>> signup(@Valid @RequestBody AuthDto entity) {

        return ResponseEntity.ok(apiResponse.success("Success", authService.signup(entity)));
    }

    @PostMapping("/signin")
    public ResponseEntity<apiResponse<AuthDto.response>> signin(@Valid @RequestBody AuthDto.signin entity) {
        return ResponseEntity.ok(apiResponse.success("Success", authService.signin(entity)));
    }
}
