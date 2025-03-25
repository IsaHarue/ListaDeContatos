import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contato {
  id?: number;
  nome: string;
  numero: string;
}

@Injectable({
  providedIn: 'root', // Certifique-se de que o serviço está sendo fornecido na raiz
})
export class ContatoService {
  private apiUrl = 'http://localhost:3000/api/contatos'; // URL do backend

  constructor(private http: HttpClient) {}

  listarContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.apiUrl);
  }

  criarContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.apiUrl, contato);
  }

  editarContato(id: number, contato: Contato): Observable<Contato> {
    return this.http.put<Contato>(`${this.apiUrl}/${id}`, contato);
  }

  excluirContato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}