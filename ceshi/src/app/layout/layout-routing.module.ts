import { NgModule } from '@angular/core';

import { Routes,RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { OrderComponent } from './order/order.component';
const routes:Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'/order',
        pathMatch:'full'
      },
      {path:'order',component:OrderComponent}
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class LayoutRoutingModule { }
