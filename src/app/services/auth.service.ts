import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  LOCALSTORAGE_KEY = 'user'
  
  constructor() { }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      localStorage.setItem(this.LOCALSTORAGE_KEY, username);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.LOCALSTORAGE_KEY);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.LOCALSTORAGE_KEY)
  }
}
