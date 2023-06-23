import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {TrendingComponent} from "./trending/trending.component";
import {WeeklyNewBigComponent} from "./weekly-new-big/weekly-new-big.component";
import {WeeklyNewSmallComponent} from "./weekly-new-small/weekly-new-small.component";
import {WhatNewsComponent} from "./what-news/what-news.component";
import {FollowUsComponent} from "./follow-us/follow-us.component";
import {NewsYoutubeComponent} from "./news-youtube/news-youtube.component";
import {NewsRecentComponent} from "./news-recent/news-recent.component";
import {ComponentModule} from "./component/component.module";
import {FooterComponent} from './footer/footer.component';
import {NewsListSmallComponent} from './news-list-small/news-list-small.component';
import {NewsSideBarComponent} from './news-side-bar/news-side-bar.component';
import { TrendingHeaderComponent } from './trending/trending-header/trending-header.component';
import { TrendingMainComponent } from './trending/trending-main/trending-main.component';


@NgModule({
  declarations: [
    HeaderComponent,
    TrendingComponent,
    WeeklyNewBigComponent,
    WeeklyNewSmallComponent,
    WhatNewsComponent,
    FollowUsComponent,
    NewsYoutubeComponent,
    NewsRecentComponent,
    FooterComponent,
    NewsListSmallComponent,
    NewsSideBarComponent,
    TrendingHeaderComponent,
    TrendingMainComponent,
  ],
  exports: [
    HeaderComponent,
    TrendingComponent,
    WeeklyNewBigComponent,
    WeeklyNewSmallComponent,
    WhatNewsComponent,
    FollowUsComponent,
    NewsYoutubeComponent,
    NewsRecentComponent,
    FooterComponent,
    NewsListSmallComponent,
    NewsSideBarComponent,
    TrendingHeaderComponent,
    TrendingMainComponent,
    ComponentModule
  ],
  imports: [
    CommonModule,
    ComponentModule
  ],
})
export class ClientUiModule {
}
