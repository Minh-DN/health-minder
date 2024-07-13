package com.healthminder.backend.enums;

public enum JwtTokenType {
    ACCESS("ACCESS"),
    REFRESH("REFRESH");

    private final String value;

    JwtTokenType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}