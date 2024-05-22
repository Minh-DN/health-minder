package com.healthminder.backend.controller;

import com.healthminder.backend.model.User;
import com.healthminder.backend.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/findUserByFirstName")
    public List<User> getUserByFirstName(@RequestParam("firstName") String firstName) {
        return userService.getUserByFirstName(firstName);
    }
}