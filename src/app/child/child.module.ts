import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1/page1.component';
import { Routes, RouterModule } from '@angular/router';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';

const subRoutes: Routes= [
{path:'', component: Page1Component},
{path:'uno', component: UnoComponent},
{path:'dos', component: DosComponent}
];

@NgModule({
  declarations: [Page1Component, UnoComponent, DosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(subRoutes)
  ]
})
export class ChildModule { }
