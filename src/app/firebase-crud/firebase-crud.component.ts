import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FirebaseAPIService } from '../firebase-api.service';
import { Client } from '../client';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-firebase-crud',
  templateUrl: './firebase-crud.component.html',
  styleUrls: ['./firebase-crud.component.css']
})
export class FirebaseCRUDComponent implements OnInit, OnDestroy {
  dataClient: any = {};
  clients: Client[] = [];
  objectService: Subscription;

  constructor(private firebaseAPI: FirebaseAPIService) {
   this.objectService = this.firebaseAPI.readClient()
    .subscribe( res => {
      this.clients = res;
    });
   }

  ngOnInit() {}

  onSubmit() {
    this.firebaseAPI.createClient(this.dataClient)
    .then(() => {
      console.log('Cliente insertado');
    });
  }

  ngOnDestroy() {
    this.objectService.unsubscribe();
  }

  public loadInputs(data) {
    this.dataClient = data;
  }

  public updateClient() {
    this.firebaseAPI.updateClient(this.dataClient)
    .then(() => {
      console.log('Actualizado');
    });
  }

  public deleteClient() {
    console.log(this.dataClient);
    this.firebaseAPI.deleteClient(this.dataClient)
    .then(() => {
      console.log('Eliminado');
    });
  }
}
