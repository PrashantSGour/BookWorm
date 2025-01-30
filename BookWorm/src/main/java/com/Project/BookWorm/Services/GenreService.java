package com.Project.BookWorm.Services;

import com.Project.BookWorm.Models.GenreMaster;

public interface GenreService {
	GenreMaster createGenre(String genereName, int languageId);
	

}
