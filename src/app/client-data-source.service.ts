import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientDataSourceService {

  constructor(private http: HttpClient) { 

  }
  getClients(): any{
    return this.http.get('http://localhost:3000/clients');
  }
}
