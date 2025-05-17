import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouteComponent } from './components/route/route.component';
import { DropbagComponent } from './components/dropbag/dropbag.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { StartComponent } from './components/start/start.component';
import { SubmitComponent } from './components/submit/submit.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'route', component: RouteComponent },
  { path: 'dropbag', component: DropbagComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'start', component: StartComponent },
  { path: 'submit', component: SubmitComponent },
  { path: '**', redirectTo: '' }
];
