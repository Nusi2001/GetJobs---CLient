import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'jwtToken';
  private jwtHelper = new JwtHelperService();
  getLoggedInUser() {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) return null;

    const decodedToken = this.jwtHelper.decodeToken(token);
    return {
      email: decodedToken?.email || '',
      role: decodedToken?.role || ''
    };
  }
  constructor(private http: HttpClient) { }

  login(credentials: { email: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('/api/auth/login', credentials);
  }

  setToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
  }
}