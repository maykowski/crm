import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountsComponent} from "./accounts.component";
import {LeadsComponent} from "./leads.component";

const routes: Routes = [
  {path: '', redirectTo: '/accounts', pathMatch: 'full'},
  {path: 'accounts', component: AccountsComponent},
  {path: 'leads', component: LeadsComponent}
  // {path: 'detail/:id', component: HeroDetailComponent},
  // {path: 'heroes', component: HeroesComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
