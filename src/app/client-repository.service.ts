import { Injectable } from '@angular/core';
import { ClientDataSourceService } from './client-data-source.service';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientRepositoryService {
private clients: Client[] = [];
  constructor(private dataSource: ClientDataSourceService) {
    this.dataSource.getClients()
    .subscribe((response)=>{
      this.clients=response;
    })
   }
   getClients(): Client[]{
     return this.clients;
   }
}
