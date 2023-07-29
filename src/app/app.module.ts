import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AgGridModule } from "ag-grid-angular";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";
import { NotFoundComponent } from "./not-found.component";
import { LoginComponent } from "./login/login.component";
import { AgGridComponent } from "./ag-grid/ag-grid.component";

// Directives
import { ShowDirective } from "./directives/show.directive";

import { AuthGuard } from "./services/auth-guard.service";

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      },
      {
        path: "home",
        canActivate: [AuthGuard],
        loadChildren: "./home/home.module#HomeModule",
        data: { name: "home" }
      },
      {
        path: "contact",
        canActivate: [AuthGuard],
        loadChildren: "./contact-us/contact.module#ContactModule",
        data: { name: "contact" }
      },
      {
        path: "about",
        canActivate: [AuthGuard],
        loadChildren: "./about/about.module#AboutModule",
        data: { name: "about" }
      },
      {
        path: "products",
        loadChildren: "./products/products.module#ProductsModule",
        data: { name: "product" }
      },
      {
        path: "404",
        component: NotFoundComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "ag-grid",
        component: AgGridComponent
      },
      {
        path: "**",
        redirectTo: "/404"
      }
    ])
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    AgGridComponent
  ],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent],
  providers: [AuthGuard]
})
export class AppModule {}
