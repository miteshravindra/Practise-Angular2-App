import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './DashBoardComponent/dashboard.component';
import { DashBoardSubComponent } from './DashboardSubComponent/dashboardsub.component';
import { DashBoard_Routes } from './dashboard.routes';





@NgModule({
  imports:[CommonModule,
    BrowserModule,
    RouterModule.forChild(DashBoard_Routes)],
  declarations:[DashboardComponent,DashBoardSubComponent]

})
export class DashBoardModule{}
