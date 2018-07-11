import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TacoMenuComponent } from './taco-menu/taco-menu.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: TacoMenuComponent },
  { path: 'detail/:id', component: MenuDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
