import { NgModule } from '@angular/core';


import { HeaderComponent } from './header.component';
import {CommonModule} from "@angular/common";
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
      CommonModule,
      NgZorroAntdModule,
      RouterModule
    ],
    exports:[HeaderComponent]
})
export class HeaderModule { }
