import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'my-footer',
  template: `<footer *ngIf="isLoggedIn$ | async" class="page-footer font-small blue">
  <div class="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://victoriousvipin.wordpress.com/" target="_blank"> Victorious Vipin</a>
  </div>
</footer>`,
styles:[
  `footer{
    color: white;
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: #343a40!important;
  }`
]
})
export class FooterComponent  implements OnInit {
  public isLoggedIn$: Observable<boolean>;
  ngOnInit(){
    this.isLoggedIn$ = of(localStorage.getItem('isLoggedIn') ? true : false);
  }
}
