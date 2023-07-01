import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarNavComponent } from './side-bar-nav/side-bar-nav.component';



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
        CommonModule
    ]
})
export class AdminUiModule { }
