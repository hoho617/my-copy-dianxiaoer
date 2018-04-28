import { NgModule } from '@angular/core';


import { InformComponent } from './inform.component';
import {CommonModule} from "@angular/common";
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
    declarations: [
        InformComponent,
    ],
    imports: [
        CommonModule,
      NgZorroAntdModule
    ],
   exports:[InformComponent]
})
export class InformModule { }
