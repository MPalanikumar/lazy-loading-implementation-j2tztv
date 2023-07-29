import {NgModule} from '@angular/core';
import {ProductsComponent} from './products.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common"

@NgModule({
  imports: [RouterModule.forChild([{
    path: '',
    component: ProductsComponent
  }]), CommonModule],
  declarations: [ProductsComponent]
})

export class ProductsModule{}