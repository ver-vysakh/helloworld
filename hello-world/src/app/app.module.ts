import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { GoogolMapComponent } from './googol-map/googol-map.component';
import { AppRoutingModule } from './app.routing';
import { MyModuleModule } from './my-module/my-module.module';

@NgModule({
  declarations: [
    AppComponent,
    GoogolMapComponent
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
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
