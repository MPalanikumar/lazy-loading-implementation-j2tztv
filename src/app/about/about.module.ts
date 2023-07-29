import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';


import {AboutUserComponent} from './about-user/about-user.component';

import {AboutCompanyComponent} from './about-company/about-company.component';

import {AuthGuard} from '../services/auth-guard.service';


@NgModule({
  imports:      [
    RouterModule.forChild([{
      path: '',
      component: AboutComponent,
      canActivate: [AuthGuard],
      children: [
        { 
          path: '',
          redirectTo: 'user',
          pathMatch: 'full'
        },
        { 
          path: 'user',
          component: AboutUserComponent
        },
        { 
          path: 'company',
          component: AboutCompanyComponent,
          canActivate: [AuthGuard],
          data: {name: 'about/company'}
        }
      ]
    }])
   ],
  declarations: [ AboutComponent,AboutUserComponent,AboutCompanyComponent ]
})
export class AboutModule { }
