import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link active" routerLink="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/oops">404</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" disabled>Disabled</a>
      </li>
    </ul>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {

  name = 'Mitesh';
}
