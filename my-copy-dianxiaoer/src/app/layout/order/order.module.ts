import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { OrderComponent } from './order.component';
import { FormsModule } from '@angular/forms';
import {OrderRoutingModule} from "./order-routing.module";

@NgModule({
  declarations: [
    OrderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
      OrderRoutingModule
  ],
  providers: []
})
export class OrderModule { }
