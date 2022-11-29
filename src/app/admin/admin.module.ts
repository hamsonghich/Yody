import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UiAdminComponent } from './ui-admin/ui-admin.component';
import { UiProductComponent } from './ui-admin/ui-product/ui-product.component';


@NgModule({
  declarations: [
    AdminComponent,
    UiAdminComponent,
    UiProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
