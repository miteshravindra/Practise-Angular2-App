import { Routes } from '@angular/router';
import { DashboardComponent } from './DashBoardComponent/dashboard.component';
import { DashBoardSubComponent } from './DashboardSubComponent/dashboardsub.component';


export const DashBoard_Routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboardsub', component: DashBoardSubComponent}
]
