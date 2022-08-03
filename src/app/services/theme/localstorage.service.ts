import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData<T>(key: string) {
    return <T | null>localStorage.getItem(key)
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }


}

