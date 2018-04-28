import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
// import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {LayoutRoutingModule} from "./layout-routing.module";
import {HeaderModule} from "../shared/component/header/header.module";
import {InformModule} from "../shared/component/inform/inform.module";
import {SiderModule} from "../shared/component/sider/sider.module";


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    // CommonModule,
    FormsModule,
    HttpClientModule,
    LayoutRoutingModule,
    HeaderModule,
    InformModule,
    SiderModule,
    NgZorroAntdModule.forRoot()//在主模块中这样使用，在子模块中需要NgZorroAntdModule
  ],
  providers: []
})
export class LayoutModule { }
