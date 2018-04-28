import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {GoodsComponent} from "./goods.component";
import {GoodsTypeComponent} from "./goods-type/goods-type.component";
const routes:Routes = [
  {
    path:'',
    component:GoodsComponent,
  },{
  path:'goods-type',
    component:GoodsTypeComponent
  }
]
@NgModule({
  imports: [
  RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class GoodsRoutingModule { }
