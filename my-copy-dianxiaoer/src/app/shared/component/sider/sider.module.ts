import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {CommonModule} from "@angular/common";
import {SiderComponent} from "./sider.component";
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        SiderComponent
    ],
    imports: [
        CommonModule,
      NgZorroAntdModule,
      RouterModule
    ],
    exports:[SiderComponent]
})
export class SiderModule { }
