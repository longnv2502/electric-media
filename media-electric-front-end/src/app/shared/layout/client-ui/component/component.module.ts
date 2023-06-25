import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationComponent} from './pagination/pagination.component';
import {FollowUsComponent} from "./follow-us/follow-us.component";
import {TrendingComponent} from "./trending/trending.component";
import {WeeklyNewBigComponent} from "./weekly-new-big/weekly-new-big.component";
import {WeeklyNewSmallComponent} from "./weekly-new-small/weekly-new-small.component";
import {TrendingHeaderComponent} from "./trending/trending-header/trending-header.component";
import {TrendingMainComponent} from "./trending/trending-main/trending-main.component";
import { PreloaderComponent } from './preloader/preloader.component';


@NgModule({
  declarations: [
    FollowUsComponent,
    PaginationComponent,
    TrendingComponent,
    TrendingHeaderComponent,
    TrendingMainComponent,
    WeeklyNewBigComponent,
    WeeklyNewSmallComponent,
    PreloaderComponent,
  ],
  exports: [
    FollowUsComponent,
    PaginationComponent,
    TrendingComponent,
    TrendingHeaderComponent,
    TrendingMainComponent,
    WeeklyNewBigComponent,
    WeeklyNewSmallComponent,
    PreloaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule {
}
