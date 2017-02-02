import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
<nav>
  <a routerLink='/leads' routerLinkActive="active">Leads</a>
  <a routerLink="/accounts" routerLinkActive="active">Accounts</a>
</nav>
<router-outlet></router-outlet>`,
})
export class AppComponent  { name = 'Angular'; }
