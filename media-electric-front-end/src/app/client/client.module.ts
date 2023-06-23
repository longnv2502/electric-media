import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import {ClientUiModule} from "../shared/layout/client-ui/client-ui.module";
import {SharedModule} from "../shared/shared.module";
import { NewspaperComponent } from './newspaper/newspaper.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import {NewspaperListComponent} from "./newspaper/newspaper-list/newspaper-list.component";
import {AboutUsMainComponent} from "./about-us/about-us-main/about-us-main.component";
import { NewpaperDetailsComponent } from './newspaper/newpaper-details/newpaper-details.component';
import {NewspaperContentComponent} from "./newspaper/newpaper-details/newspaper-content/newspaper-content.component";
import {NewspaperCommentComponent} from "./newspaper/newpaper-details/newspaper-comment/newspaper-comment.component";


@NgModule({
  declarations: [
    HomeComponent,
    NewspaperComponent,
    AboutUsComponent,
    AboutUsMainComponent,
    ContactComponent,
    NewspaperListComponent,
    NewpaperDetailsComponent,
    NewspaperContentComponent,
    NewspaperCommentComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ClientUiModule,
    SharedModule
  ]
})
export class ClientModule { }
