package com.healthminder.backend.repository;

import com.healthminder.backend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    // Find users by first name
    @Query("{ 'firstName': ?0 }")
    List<User> findByFirstName(String firstName);
}
