import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {ComponentModule} from "./component/component.module";
import {FooterComponent} from './footer/footer.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ComponentModule
  ],
  imports: [
    CommonModule,
    ComponentModule,
    RouterLink
  ],
})
export class ClientUiModule {
}
