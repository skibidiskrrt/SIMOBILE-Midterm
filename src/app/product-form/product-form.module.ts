import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { ProductFormPageRoutingModule } from './product-form-routing.module';

import { ProductFormPage } from './product-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProductFormPageRoutingModule

  ],
  declarations: [ProductFormPage]
})
export class ProductFormPageModule {}
