import { Component, OnInit } from "@angular/core";
import { Observable, Subject, of } from "rxjs";

@Component({
  selector: "my-header",
  template: `
    <nav
      *ngIf="(isLoggedIn$ | async)"
      class="navbar navbar-expand-sm bg-dark navbar-dark"
    >
      <a class="navbar-brand" routerLink="home">
        <img
          src="https://www.w3schools.com/bootstrap4/bird.jpg"
          alt="Logo"
          style="width:40px;"
        />
      </a>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" routerLink="home" (click)="setActive($event)"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="products" (click)="setActive($event)"
            >Products</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="about" (click)="setActive($event)"
            >About Us</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="contact" (click)="setActive($event)"
            >Contact</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            routerLink="ag-grid"
            (click)="setActive($event)"
            style="cursor: pointer;"
            >Ag Grid</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" (click)="logout($event)" style="cursor: pointer;"
            >Logout</a
          >
        </li>
      </ul>
    </nav>
  `
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor() {}
  ngOnInit() {
    this.isLoggedIn$ = of(localStorage.getItem("isLoggedIn") ? true : false);
  }
  setActive(e: Event) {
    document.querySelectorAll(".nav-item").forEach((elem, i) => {
      elem.classList.remove("active");
    });
    e.srcElement.parentElement.classList.add("active");
  }

  logout(e) {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "https://lazy-loading-implementation.stackblitz.io";
    e.preventDefault();
  }
}
