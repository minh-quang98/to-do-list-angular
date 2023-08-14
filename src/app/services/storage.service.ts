import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key))
  }

  setData(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
