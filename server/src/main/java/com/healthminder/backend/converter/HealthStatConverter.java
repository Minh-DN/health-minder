package com.healthminder.backend.converter;

import com.healthminder.backend.dto.HealthStatResponse;
import com.healthminder.backend.model.HealthStat;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class HealthStatConverter {

    private static final Logger logger = LoggerFactory.getLogger(HealthStatConverter.class);

    public HealthStatResponse convertToResponse(HealthStat healthStat) {
        if (healthStat==null) {
            logger.debug("Provided healthStat is null - unable to convert to repsonse");
            return null;
        }
        return HealthStatResponse.builder()
                .healthStatId(healthStat.getId())
                .userId(healthStat.getUserId())
                .date(healthStat.getDate())
                .stepsTaken(healthStat.getStepsTaken())
                .activeTime(healthStat.getActiveTime())
                .sleepTime(healthStat.getSleepTime())
                .sedentaryTime(healthStat.getSedentaryTime())
                .computerScreenTime(healthStat.getComputerScreenTime())
                .phoneScreenTime(healthStat.getPhoneScreenTime())
                .build();
    }
}