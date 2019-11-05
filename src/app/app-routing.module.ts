import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { FirebaseCRUDComponent } from './firebase-crud/firebase-crud.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ContentComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'child', loadChildren: './child/child.module#ChildModule'},
  {path: 'weather', component: WeatherForecastComponent},
  {path: 'template-forms', component: TemplateFormsComponent},
  {path: 'firebaseCRUD', component: FirebaseCRUDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
