import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  data: any = {};
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    alert(JSON.stringify(this.data));
  }
}
