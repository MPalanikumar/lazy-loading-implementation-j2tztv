import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit  {
  flag: boolean = true;
  
  ngOnInit(){
  }
  showHide(){
    this.flag = !this.flag;
  }
}
