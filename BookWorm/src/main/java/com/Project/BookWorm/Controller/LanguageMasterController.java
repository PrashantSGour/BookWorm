package com.Project.BookWorm.Controller;
import com.Project.BookWorm.Models.LanguageMaster;
import com.Project.BookWorm.Service.LanguageMasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/languages")
public class LanguageMasterController{
    @Autowired
    private LanguageMasterService languageMasterService;
    @GetMapping
    public List<LanguageMaster> getAllLanguages(){
        return languageMasterService.getAllLanguages();
    }
    @PostMapping
    public LanguageMaster saveLanguage(@RequestBody LanguageMaster languageMaster){
        return languageMasterService.saveLanguage(languageMaster);
    }
    @GetMapping("/{id}")
    public LanguageMaster getLanguageById(@PathVariable int id){
        return languageMasterService.getLanguageById(id);
    }
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable int id){
        languageMasterService.deleteById(id);
    }
    @PutMapping("/{id}")
    public LanguageMaster updateLanguage(@PathVariable int id, @RequestBody LanguageMaster languageMaster){
        return languageMasterService.updateLanguage(id, languageMaster);
    }
}