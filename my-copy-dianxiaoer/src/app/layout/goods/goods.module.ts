import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { GoodsComponent } from './goods.component';
import { FormsModule } from '@angular/forms';
import {GoodsRoutingModule} from "./goods-routing.module";
import { GoodsTypeComponent } from './goods-type/goods-type.component';
@NgModule({
  declarations: [
    GoodsComponent,
    GoodsTypeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
      GoodsRoutingModule
  ],
  providers: []
})
export class GoodsModule { }
