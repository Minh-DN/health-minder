package com.healthminder.backend.service.impl;

import com.healthminder.backend.dto.JwtContainer;
import com.healthminder.backend.enums.JwtTokenType;
import com.healthminder.backend.model.User;
import com.healthminder.backend.service.JwtService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtServiceImpl implements JwtService {

    @Value("${jwt.secret}")
    private String SECRET_KEY;

    private static final long ACCESS_TOKEN_EXPIRATION = 1000L * 60 * 60 * 24; // 24 hours
    private static final long REFRESH_TOKEN_EXPIRATION = 1000L * 60 * 60 * 24 * 7; // 7 days

    // region Public methods
    @Override
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    @Override
    public JwtContainer generateTokens(User user) {
        String accessToken = generateToken(user, JwtTokenType.ACCESS);
        String refreshToken = generateToken(user, JwtTokenType.REFRESH);

        return new JwtContainer(accessToken, refreshToken);
    }

    @Override
    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    @Override
    public boolean isRefreshTokenValid(String token) {
        final String tokenType = extractClaim(token, claims -> claims.get("tokenType", String.class));
        return JwtTokenType.REFRESH.name().equals(tokenType) && !isTokenExpired(token);
    }
    // endregion

    // region Private methods
    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private String generateToken(User user, JwtTokenType tokenType) {
        long currentTimeMillis = System.currentTimeMillis();
        Date currentTimeAsDate = new Date(currentTimeMillis);
        long expirationDuration = tokenType==JwtTokenType.ACCESS ? ACCESS_TOKEN_EXPIRATION:REFRESH_TOKEN_EXPIRATION;
        Date expirationTimeAsDate = new Date(currentTimeMillis + expirationDuration);

        Map<String, Object> extraClaims = Map.of(
                "userId", user.getId(),
                "tokenType", tokenType,
                "firstName", user.getFirstName(),
                "lastName", user.getLastName(),
                "role", user.getRole()
        );

        return Jwts.builder()
                .subject(user.getUsername())
                .claims(extraClaims)
                .issuedAt(currentTimeAsDate)
                .expiration(expirationTimeAsDate)
                .signWith(getSigningKey(), Jwts.SIG.HS256)
                .compact();
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private Claims extractAllClaims(String token) {
        return Jwts
                .parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    private SecretKey getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
    // endregion
}
