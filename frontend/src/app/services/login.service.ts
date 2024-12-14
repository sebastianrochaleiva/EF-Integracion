import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/mesero';
import { Observable } from 'rxjs';  // Importamos Observable

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:2500/api/auth';

  constructor(private http: HttpClient) { }

  login(user: Login): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);  
  }
}
