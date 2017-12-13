
import { RouterModule, Routes } from '@angular/router';
import { GoogolMapComponent } from './googol-map/googol-map.component';

const appRoutes: Routes = [{ path: 'map', component: GoogolMapComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);
