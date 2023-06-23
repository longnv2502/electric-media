import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxWebstorageModule} from "ngx-webstorage";
import {AppConfig} from "./shared";
import { LatestNewsComponent } from './latest-news/latest-news.component';

const appConfigLoader = (appConfig: AppConfig) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    LatestNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigLoader,
      multi: true,
      deps: [AppConfig]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
