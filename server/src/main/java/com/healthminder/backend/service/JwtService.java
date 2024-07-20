package com.healthminder.backend.service;

import com.healthminder.backend.dto.JwtContainer;
import com.healthminder.backend.model.User;
import org.springframework.security.core.userdetails.UserDetails;

public interface JwtService {
    String extractUsername(String token);

    JwtContainer generateTokens(User user);

    boolean isTokenValid(String token, UserDetails userDetails);

    boolean isRefreshTokenValid(String token);
}
