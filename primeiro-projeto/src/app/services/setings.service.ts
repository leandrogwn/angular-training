import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetingsService {

  constructor() { }

  getLocale(){
    return 'pt-BR';
  }
  
}
