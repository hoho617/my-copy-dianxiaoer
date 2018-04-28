import { NgModule } from '@angular/core';


import { LayoutComponent } from './layout.component';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    LayoutComponent,
    OrderComponent
  ],
  imports: [
      CommonModule,
      LayoutRoutingModule
  ],
  providers: []
})
export class LayoutModule { }
