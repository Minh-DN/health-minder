package com.healthminder.backend.service.impl;

import com.healthminder.backend.converter.HealthStatConverter;
import com.healthminder.backend.dto.HealthStatResponse;
import com.healthminder.backend.dto.UpsertHealthStatRequest;
import com.healthminder.backend.model.HealthStat;
import com.healthminder.backend.repository.HealthStatRepository;
import com.healthminder.backend.service.HealthStatService;
import com.healthminder.backend.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class HealthStatServiceImpl implements HealthStatService {

    private static final Logger logger = LoggerFactory.getLogger(HealthStatServiceImpl.class);

    private static final String DATE = "date";

    private final HealthStatRepository healthStatRepository;
    private final HealthStatConverter healthStatConverter;
    private final JwtService jwtService;

    @Override
    public Page<HealthStatResponse> getHealthStats(String userId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, DATE));
        Page<HealthStat> healthStatPage = healthStatRepository.findByUserId(userId, pageable);

        return healthStatPage.map(healthStatConverter::convertToResponse);
    }

    @Override
    public void upsertHealthStat(UpsertHealthStatRequest request) {
        Optional<HealthStat> currentHealthStat = healthStatRepository.findByUserIdAndDate(request.getUserId(), request.getDate());

        HealthStat healthStat = currentHealthStat.orElse(
                HealthStat.builder()
                        .userId(request.getUserId())
                        .date(request.getDate())
                        .build()
        );

        if (request.getStepsTaken()!=null) {
            healthStat.setStepsTaken(request.getStepsTaken());
        }
        if (request.getSleepTime()!=null) {
            healthStat.setSleepTime(request.getSleepTime());
        }
        if (request.getActiveTime()!=null) {
            healthStat.setActiveTime(request.getActiveTime());
        }
        if (request.getComputerScreenTime()!=null) {
            healthStat.setComputerScreenTime(request.getComputerScreenTime());
        }
        if (request.getPhoneScreenTime()!=null) {
            healthStat.setPhoneScreenTime(request.getPhoneScreenTime());
        }
        if (request.getSedentaryTime()!=null) {
            healthStat.setSedentaryTime(request.getSedentaryTime());
        }

        healthStatRepository.save(healthStat);
    }
}
