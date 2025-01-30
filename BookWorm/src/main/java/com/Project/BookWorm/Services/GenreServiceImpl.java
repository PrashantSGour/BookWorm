package com.Project.BookWorm.Services;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Project.BookWorm.Models.GenreMaster;
import com.Project.BookWorm.Models.LanguageMaster;
import com.Project.BookWorm.Repository.GenreMasterRepository;
import com.Project.BookWorm.Repository.LanguageMasterRepository;

@Service
public class GenreServiceImpl implements GenreService {
	@Autowired
	private GenreMasterRepository genreMasterRepository;
	@Autowired
	private LanguageMasterRepository languageMasterRepo;

	@Override
	public GenreMaster createGenre(String genereName, int languageId) {
		Optional<LanguageMaster> languagemaster=languageMasterRepo.findById(languageId);
		
		if (languagemaster.isPresent()) {
			GenreMaster genremast=new GenreMaster();
			genremast.setGenreDesc(genereName);
			genremast.setLanguageId(languagemaster.get());
			return genreMasterRepository.save(genremast);
		}
		return null;
	}

}

