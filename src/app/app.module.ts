import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { App_Routes } from './app.routes';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';

@NgModule({
  imports: [BrowserModule,
    CommonModule,
    RouterModule.forRoot(App_Routes)],
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
