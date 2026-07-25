package org.bilinow.backend.common;

public record apiResponse<T>(
        boolean success,
        String message,
        T data
) {
    public static <T> apiResponse<T> success(String message, T data){
        return new apiResponse<T>(true, message, data);
    }

    public static <T> apiResponse<T> fail(String message){
        return new apiResponse<T>(false, message, null);
    }
}