import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {HomeComponent} from './home/home.component';
import {SharedModule} from "../shared/shared.module";
import {NewspaperComponent} from './newspaper/newspaper.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactComponent} from './contact/contact.component';
import {NewspaperListComponent} from "./newspaper/newspaper-list/newspaper-list.component";
import {AboutUsMainComponent} from "./about-us/about-us-main/about-us-main.component";
import {NewspaperDetailsComponent} from './newspaper/newspaper-details/newspaper-details.component';
import {NewspaperContentComponent} from "./newspaper/newspaper-details/newspaper-content/newspaper-content.component";
import {NewspaperCommentComponent} from "./newspaper/newspaper-details/newspaper-comment/newspaper-comment.component";
import {NewspaperLatestComponent} from "./newspaper-latest/newspaper-latest.component";
import {NewspaperYoutubeComponent} from "./newspaper-latest/newspaper-youtube/newspaper-youtube.component";
import {WhatNewsComponent} from "./newspaper-latest/what-news/what-news.component";
import {
  NewspaperListSmallComponent
} from "./newspaper-latest/what-news/newspaper-list-small/newspaper-list-small.component";
import {NewspaperSidebarComponent} from "./newspaper/newspaper-sidebar/newspaper-sidebar.component";
import {NewsRecentComponent} from "./home/news-recent/news-recent.component";
import {ClientComponent} from "./client.component";
import {AuthComponent} from './auth/auth.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {SignOutComponent} from './auth/sign-out/sign-out.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';


@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    AboutUsComponent,
    AboutUsMainComponent,
    ContactComponent,
    NewspaperContentComponent,
    NewspaperLatestComponent,
    WhatNewsComponent,
    NewspaperSidebarComponent,
    NewsRecentComponent,
    NewspaperCommentComponent,
    NewspaperDetailsComponent,
    NewspaperListComponent,
    NewspaperComponent,
    NewspaperYoutubeComponent,
    NewspaperListSmallComponent,
    AuthComponent,
    SignInComponent,
    SignOutComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
  ]
})
export class ClientModule {
}
