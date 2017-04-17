import { Routes } from '@angular/router'
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';


export const App_Routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];
