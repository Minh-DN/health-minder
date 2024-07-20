package com.healthminder.backend.service.impl;

import com.healthminder.backend.dto.*;
import com.healthminder.backend.enums.UserRole;
import com.healthminder.backend.model.User;
import com.healthminder.backend.repository.UserRepository;
import com.healthminder.backend.service.AuthenticationService;
import com.healthminder.backend.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByUsername(request.getUsername())
                .orElseThrow();
        var jwtTokens = jwtService.generateTokens(user);

        return AuthenticationResponse.builder()
                .accessToken(jwtTokens.getAccessToken())
                .refreshToken(jwtTokens.getRefreshToken())
                .build();
    }

    @Override
    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .accountNonExpired(true)
                .accountNonLocked(true)
                .credentialsNonExpired(true)
                .enabled(true)
                .role(UserRole.USER)
                .build();
        userRepository.save(user);
        var jwtTokens = jwtService.generateTokens(user);

        return AuthenticationResponse.builder()
                .accessToken(jwtTokens.getAccessToken())
                .refreshToken(jwtTokens.getRefreshToken())
                .build();
    }

    @Override
    public AuthenticationResponse refresh(RefreshTokenRequest request) {
        String refreshToken = request.getRefreshToken();
        if (jwtService.isRefreshTokenValid(refreshToken)) {
            String username = jwtService.extractUsername(refreshToken);
            User user = userRepository.findByUsername((username))
                    .orElseThrow();
            JwtContainer jwtTokens = jwtService.generateTokens(user);
            return AuthenticationResponse.builder()
                    .accessToken(jwtTokens.getAccessToken())
                    .refreshToken(jwtTokens.getRefreshToken())
                    .build();
        } else {
            throw new RuntimeException("Invalid refresh token");
        }
    }

    // TODO: implement register for admin
}
