import { BehaviorSubject, pipe } from 'rxjs';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

const SELECTED_LANGUAGE = 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage = new BehaviorSubject('');

  constructor(private translateService: TranslateService, private storage: Storage) { }

  setInitialLanguage(){
    // to get browser default language
    const lang = this.translateService.getBrowserLang();
    this.translateService.setDefaultLang(lang);
    this.currentLanguage.next(lang);
    // checking local storage for previous selection
    this.storage.get(SELECTED_LANGUAGE).then( language => {
      if (language) {
        this.setLanguage(language);
        this.currentLanguage.next(language);
      }
    });
  }

  getCurrentLanguage(){
    return this.currentLanguage.asObservable();
  }

  getLanguage(){
    return [
      {text: 'हिन्दी', value: 'hin'},
      {text: 'English', value: 'en'}
    ];
  }

  setLanguage(language){
    this.translateService.use(language);
    this.currentLanguage.next(language);
    this.storage.set(SELECTED_LANGUAGE, language);
  }

}
