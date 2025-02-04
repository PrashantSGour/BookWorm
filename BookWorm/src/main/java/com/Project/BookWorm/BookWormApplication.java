package com.Project.BookWorm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin("*")
@ComponentScan(basePackages="com.Project.*")
@EntityScan(basePackages="com.Project.*")
@EnableJpaRepositories(basePackages="com.Project.*")
public class BookWormApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookWormApplication.class, args);
	}

}
