import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Client } from './client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FirebaseAPIService {

  constructor(private firebaseApi: AngularFireDatabase) { }

  public createClient(client: Client): Promise <any> {
    return this.firebaseApi.database.ref('clients').push(client);
  }

  public readClient(): Observable <any> {
    return this.firebaseApi.list('clients').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    );
  }

  public updateClient(client): Promise <any> {
    return this.firebaseApi.database.ref('clients/' + client.key).set(client);
  }

  public deleteClient(client): Promise <any> {
    return this.firebaseApi.database.ref('clients/' + client.key).remove();
  }
}
