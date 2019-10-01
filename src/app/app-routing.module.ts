import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchPageComponent} from './search-page/search-page.component';
import {AuthPageComponent} from './mockPages/auth-page/auth-page.component';
import {OrderMockComponent} from './mockPages/order-mock/order-mock.component';
import {TinderComponent} from './mockPages/tinder/tinder.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: SearchPageComponent
  },
  {
    path: 'auth',
    component: AuthPageComponent
  },
  {
    path: 'order',
    component: OrderMockComponent
  },
  {
    path: 'tinder',
    component: TinderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
