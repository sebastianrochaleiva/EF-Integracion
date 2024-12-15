import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  // Importamos Observable
import { Clientes } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrlGet = 'http://localhost:2500/api/clientes';
  private apiUrl = 'http://localhost:2500/api/cliente';
 

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.apiUrlGet);
  }

  addCliente(cliente: Clientes):  Observable<any> {
    return this.http.post<Clientes>(this.apiUrl, cliente);
  }

  updateCliente(id: string, cliente: Clientes): Observable<Clientes> {
    return this.http.put<Clientes>(`${this.apiUrl}/${id}`, cliente);
  }

  deleteCliente(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getCliente(id: string): Observable<Clientes> {
    return this.http.get<Clientes>(`${this.apiUrl}/${id}`);
  }
}
