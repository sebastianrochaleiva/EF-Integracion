import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = 'http://localhost:2500/api/categoria';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }

  addCategoria(categoria: Categoria):  Observable<any> {
    return this.http.post<Categoria>(this.apiUrl, categoria);
  }

  updateCategoria(id: string, categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.apiUrl}/${id}`, categoria);
  }

  deleteCategoria(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getCategoria(id: string): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.apiUrl}/${id}`);
  }
}
