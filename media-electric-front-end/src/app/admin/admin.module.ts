import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from "./admin.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import {SharedModule} from "../shared/shared.module";
import { BlankComponent } from './blank/blank.component';
import { BaseComponent } from './base/base.component';
import { UserManagerComponent } from './user/manager/user-manager.component';
import { UserEditComponent } from './user/edit/user-edit.component';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    BlankComponent,
    BaseComponent,
    UserManagerComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    CKEditorModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
