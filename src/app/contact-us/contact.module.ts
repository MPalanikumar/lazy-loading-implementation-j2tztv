import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';




import { ContactComponent } from './contact.component';

import {AuthGuard} from '../services/auth-guard.service';

@NgModule({
  imports:      [ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      component: ContactComponent
    }]),
    CommonModule
   ],
  declarations: [ ContactComponent ]
})
export class ContactModule { }
