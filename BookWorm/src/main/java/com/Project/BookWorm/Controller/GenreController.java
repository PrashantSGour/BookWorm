//package com.Project.BookWorm.Controllers;
//
//import java.net.URI;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.Project.BookWorm.Models.GenreMaster;
//import com.Project.BookWorm.Services.GenreService;
//import com.Project.BookWorm.dto.GenreDto;
//
//@RestController
//@RequestMapping("/genre")
//public class GenreController {
//	@Autowired
//	private GenreService genreservice;
//	
//	@PostMapping
//	public ResponseEntity<GenreMaster> createGenre(@RequestBody GenreDto genreDto) {
//		GenreMaster genreMaster = genreservice.createGenre(genreDto.genreDesc(), genreDto.languageId());
//		if (genreMaster != null) {
//			return ResponseEntity.created(URI.create("")).body(genreMaster);
//		} else {
//			return ResponseEntity.badRequest().body(null);
//		}
//	}
//
//}



