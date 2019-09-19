import { Component, OnInit } from '@angular/core';
import { ClientDataSourceService } from '../client-data-source.service';
import { ClientRepositoryService } from '../client-repository.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private clientRepository: ClientRepositoryService) { 
  } 
  
  ngOnInit() {
    console.log('init')
  }

  get clients() {
return this.clientRepository.getClients();
  }
}
