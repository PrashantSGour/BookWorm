package com.Project.BookWorm.Service;
import com.Project.BookWorm.Models.LanguageMaster;
import com.Project.BookWorm.Repository.LanguageMasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LanguageMasterService {
@Autowired
private LanguageMasterRepository languageMasterRepository;
    public List<LanguageMaster> getAllLanguages(){
        return languageMasterRepository.findAll();

    }
    public LanguageMaster saveLanguage(LanguageMaster languageMaster){
        return languageMasterRepository.save(languageMaster);
    }
    public LanguageMaster getLanguageById(int id){
        return languageMasterRepository.findById(id).orElse(null);
    }
    public void deleteById(int id){
        languageMasterRepository.deleteById(id);
    }
    public LanguageMaster updateLanguage(int id, LanguageMaster languageMaster){
        if(languageMasterRepository.existsById(id)){
            languageMaster.setLanguageId(id);
            return languageMasterRepository.save(languageMaster);
        }
        return null;
    }
}