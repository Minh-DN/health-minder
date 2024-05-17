package com.healthminder.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.load();
		String mongodbUri = dotenv.get("MONGODB_URI");
		if (mongodbUri == null) {
			throw new IllegalStateException("MONGODB_URI must be set in the .env file");
		}
		System.setProperty("MONGODB_URI", mongodbUri);

		SpringApplication.run(Application.class, args);
	}

}
