import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const routes: Routes = [
  {path:'',redirectTo: 'home',pathMatch:'full'},
  {path:'home', component:ContentComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'child', loadChildren:'./child/child.module#ChildModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
