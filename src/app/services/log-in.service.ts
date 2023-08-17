import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

const userStorageKey = "User";

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private storageService: StorageService) {}

  saveUser(username: string): void {
    this.storageService.setData(userStorageKey, username)
  }

  getUser(): string {
    return this.storageService.getData(userStorageKey)
  }
}
