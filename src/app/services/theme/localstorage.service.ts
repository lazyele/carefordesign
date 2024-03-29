import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getItem<T>(key: string) {
    return <T | null>localStorage.getItem(key)
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }
}

