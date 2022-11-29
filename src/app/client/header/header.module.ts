import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {InputFilterModule} from '../../libs/input-filter/input-filter.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    InputFilterModule
  ]
})
export class HeaderModule { }
