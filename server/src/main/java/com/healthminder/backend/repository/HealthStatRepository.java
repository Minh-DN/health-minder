package com.healthminder.backend.repository;

import com.healthminder.backend.model.HealthStat;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Optional;

@Repository
public interface HealthStatRepository extends MongoRepository<HealthStat, String> {
    Page<HealthStat> findByUserId(String userId, Pageable pageable);

    Optional<HealthStat> findByUserIdAndDate(String userId, LocalDate date);
}