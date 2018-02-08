import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { GoogolMapComponent } from './googol-map/googol-map.component';
import { AppRoutingModule } from './app.routing';
import { MyModuleModule } from './my-module/my-module.module';
import { FireComponent } from './fire/fire.component';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    GoogolMapComponent,
    FireComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCn0GypF7OdHGz5iAOoAKdoVYvRviGA2jM'
    }),
    AppRoutingModule,
    MyModuleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
