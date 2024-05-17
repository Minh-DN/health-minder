package com.healthminder.backend.repository;

import com.healthminder.backend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {

    // Find users by name
    List<User> findByName(String name);
}
