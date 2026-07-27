package org.bilinow.backend.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;

@Configuration
public class DummyJsonConfig {

    @Bean
    RestClient restClient(){
        return RestClient.builder()
                .baseUrl("https://dummyjson.com")
                .build();
    }
}
