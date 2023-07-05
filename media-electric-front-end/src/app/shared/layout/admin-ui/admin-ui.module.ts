import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SideBarNavComponent} from './side-bar-nav/side-bar-nav.component';
import {ComponentModule} from "./component/component.module";
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    SideBarNavComponent
  ],
  exports: [
    HeaderComponent,
    SideBarNavComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    RouterLink
  ]
})
export class AdminUiModule {
}
