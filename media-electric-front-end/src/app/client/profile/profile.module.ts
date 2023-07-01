import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from "./profile.component";
import {ProfileAboutComponent} from "./profile-about/profile-about.component";
import {ProfileTimelineComponent} from "./profile-timeline/profile-timeline.component";
import {ProfileAboutEditComponent} from "./profile-about/profile-about-edit/profile-about-edit.component";
import {ProfileAboutDetailComponent} from "./profile-about/profile-about-detail/profile-about-detail.component";


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileAboutComponent,
    ProfileTimelineComponent,
    ProfileAboutEditComponent,
    ProfileAboutDetailComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule {
}
