import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ClientComponent } from './client.component';
import { FormsModule } from '@angular/forms';
import {ClientRoutingModule} from "./client-routing.module";

@NgModule({
  declarations: [
    ClientComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    ClientRoutingModule
  ],
  providers: []
})
export class ClientModule { }
