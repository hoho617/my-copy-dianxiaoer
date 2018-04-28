import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SettingComponent } from './setting.component';
import { FormsModule } from '@angular/forms';
import {SettingRoutingModule} from "./setting-routing.module";

@NgModule({
  declarations: [
    SettingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
      SettingRoutingModule
  ],
  providers: []
})
export class SettingModule { }
