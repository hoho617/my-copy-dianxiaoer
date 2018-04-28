import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { CommentComponent } from './comment.component';
import { FormsModule } from '@angular/forms';
import {CommentRoutingModule} from "./comment-routing.module";

@NgModule({
  declarations: [
    CommentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
      CommentRoutingModule
  ],
  providers: []
})
export class CommentModule { }
