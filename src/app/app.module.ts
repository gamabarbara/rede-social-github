import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { environment } from 'src/environments/environment';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { PagesComponent } from './not-found/pages/pages.component';
import { MatCardModule } from '@angular/material/card';
import { ServiceWorkerModule } from '@angular/service-worker';




@NgModule({
  declarations: [
    AppComponent,
    PagesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    FirebaseTSApp.init(environment.firebaseConfig)
  }
}
