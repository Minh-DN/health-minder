package com.healthminder.backend.controller.external;

import com.healthminder.backend.constants.ApiConstants;
import com.healthminder.backend.dto.HealthStatResponse;
import com.healthminder.backend.dto.UpsertHealthStatRequest;
import com.healthminder.backend.service.HealthStatService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping(ApiConstants.API_BASE_PATH + "/external/health-stat")
public class HealthStatExternal {

    private final HealthStatService healthStatService;

    @GetMapping
    public ResponseEntity<Page<HealthStatResponse>> getHealthStat(@RequestParam String userId,
                                                                  @RequestParam int page,
                                                                  @RequestParam int size) {
        Page<HealthStatResponse> healthStats = healthStatService.getHealthStats(userId, page, size);
        return ResponseEntity.ok(healthStats);
    }

    @PostMapping
    public ResponseEntity<Void> upsertHealthStat(@Valid @RequestBody UpsertHealthStatRequest request) {
        healthStatService.upsertHealthStat(request);
        return ResponseEntity.ok().build();
    }
}