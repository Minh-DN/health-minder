package com.healthminder.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class HealthStatResponse {
    private String healthStatId;
    private String userId;
    private LocalDate date;
    private Integer stepsTaken;
    // Time values are stored in seconds
    private Integer sleepTime;
    private Integer activeTime;
    private Integer computerScreenTime;
    private Integer phoneScreenTime;
    private Integer sedentaryTime;
}
