import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {ComponentModule} from "./component/component.module";
import {FooterComponent} from './footer/footer.component';
import {RouterLink} from "@angular/router";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ComponentModule
  ],
  imports: [
    CommonModule,
    ComponentModule,
    RouterLink,
  ],
})
export class ClientUiModule {
}
