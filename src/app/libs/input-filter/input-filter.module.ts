import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFilterV1Component } from './input-filter-v1/input-filter-v1.component';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    InputFilterV1Component
  ],
  exports: [
    InputFilterV1Component
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class InputFilterModule { }
