import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { FirebaseCRUDComponent } from './firebase-crud/firebase-crud.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

var firebaseConfig = {
  apiKey: "AIzaSyAZ_6uO_gHXz0dnCWHfJV-tXyaScmLqum8",
  authDomain: "ionic-proyect-4a656.firebaseapp.com",
  databaseURL: "https://ionic-proyect-4a656.firebaseio.com",
  projectId: "ionic-proyect-4a656",
  storageBucket: "ionic-proyect-4a656.appspot.com",
  messagingSenderId: "1058300241051",
  appId: "1:1058300241051:web:747130bedb078e3b30523e"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    AboutusComponent,
    SpinnerComponent,
    WeatherForecastComponent,
    TemplateFormsComponent,
    FirebaseCRUDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
