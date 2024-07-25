package com.healthminder.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.CompoundIndex;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Document(collection = "HealthStat")
@CompoundIndex(name = "user_date_idx", def = "{'userId': 1, 'date': 1}")
public class HealthStat {
    @Id
    private String id;

    @Indexed
    private String userId;

    private LocalDate date;
    private int stepsTaken;

    // Time values are stored in seconds
    private int sleepTime;
    private int activeTime;
    private int computerScreenTime;
    private int phoneScreenTime;
    private int sedentaryTime;

    @CreatedDate
    private Instant createdAt;

    @LastModifiedDate
    private Instant updatedAt;
}