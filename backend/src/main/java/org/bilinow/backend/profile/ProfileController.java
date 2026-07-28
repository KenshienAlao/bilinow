package org.bilinow.backend.profile;


import lombok.RequiredArgsConstructor;
import org.bilinow.backend.common.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/profile")
public class ProfileController {

    private final ProfileService profileService;

    @GetMapping("/get-profile")
    public ResponseEntity<ApiResponse<ProfileDto>> get() {
        return ResponseEntity.ok(ApiResponse.success("Success", profileService.get()));
    }
}
