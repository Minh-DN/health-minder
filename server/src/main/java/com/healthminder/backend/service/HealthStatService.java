package com.healthminder.backend.service;

import com.healthminder.backend.dto.HealthStatResponse;
import com.healthminder.backend.dto.UpsertHealthStatRequest;
import org.springframework.data.domain.Page;

public interface HealthStatService {

    Page<HealthStatResponse> getHealthStats(String userId, int page, int size);

    void upsertHealthStat(UpsertHealthStatRequest request);
}
