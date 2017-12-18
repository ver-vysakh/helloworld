
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogolMapComponent } from './googol-map/googol-map.component';

import { AppCustomPreloader } from './app-routing-loader';

const appRoutes: Routes = [{ path: 'map', component: GoogolMapComponent },
{path: 'forms', loadChildren: './my-module/my-module.module#MyModuleModule', data: { preload: true }}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: AppCustomPreloader })], // Using our own custom preloader
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
