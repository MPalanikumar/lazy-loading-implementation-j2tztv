import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

// Directives
import {ShowDirective} from '../directives/show.directive';
import {ColorDirective} from '../directives/color.directive';

// Pipes
import {PowerPipe} from '../pipes/power.pipe';

// Services - Auth Guard
import {AuthGuard} from '../services/auth-guard.service';

@NgModule({
  imports:      [
    RouterModule.forChild([{
      path: '',
      component: HomeComponent
    }])
   ],
  declarations: [ HomeComponent, ShowDirective, ColorDirective, PowerPipe ]
})
export class HomeModule { }
