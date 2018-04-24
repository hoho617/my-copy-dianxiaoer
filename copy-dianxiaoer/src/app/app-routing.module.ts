import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [   //配置主页面路由---主页面为layout页面
  {
    path:'',
    loadChildren:'./layout/layout.module#LayoutModule'
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]   //记住将RouterModule导出去
})
export class AppRoutingModule { }
