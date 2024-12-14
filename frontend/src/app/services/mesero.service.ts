import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';  // Importamos Observable
import { Meseros } from '../models/meseros';

@Injectable({
  providedIn: 'root'
})
export class MeseroService {
  private apiUrlGet = 'http://localhost:2500/api/meseros';
  private apiUrl = 'http://localhost:2500/api/mesero';
  private auth = 'http://localhost:2500/api/auth';

  constructor(private http: HttpClient) { }

  login(mesero: Login): Observable<any> {
    return this.http.post<any>(this.auth, mesero);  
  }

  getMeseros(): Observable<Meseros[]> {
    return this.http.get<Meseros[]>(this.apiUrlGet);
  }

  addMesero(mesero: Meseros):  Observable<any> {
    return this.http.post<Meseros>(this.apiUrl, mesero);
  }

  updateMesero(id: string, mesero: Meseros): Observable<Meseros> {
    return this.http.put<Meseros>(`${this.apiUrl}/${id}`, mesero);
  }

  deleteMesero(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getMesero(id: string): Observable<Meseros> {
    return this.http.get<Meseros>(`${this.apiUrl}/${id}`);
  }
}
