package com.healthminder.backend.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class UpsertHealthStatRequest {

    @NotEmpty(message = "User ID is required")
    private String userId;

    @NotNull(message = "Date is required")
    private LocalDate date;

    private Integer stepsTaken;
    // Time values are stored in hours
    private Double sleepTime;
    private Double activeTime;
    private Double computerScreenTime;
    private Double phoneScreenTime;
    private Double sedentaryTime;
}
