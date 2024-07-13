package com.healthminder.backend.service;

import com.healthminder.backend.dto.AuthenticationRequest;
import com.healthminder.backend.dto.AuthenticationResponse;
import com.healthminder.backend.dto.RefreshTokenRequest;
import com.healthminder.backend.dto.RegisterRequest;

public interface AuthenticationService {
    AuthenticationResponse authenticate(AuthenticationRequest request);

    AuthenticationResponse register(RegisterRequest request);

    AuthenticationResponse refresh(RefreshTokenRequest request);
}
