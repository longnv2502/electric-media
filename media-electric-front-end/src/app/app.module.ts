import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxWebstorageModule} from "ngx-webstorage";
import {AppConfig} from "./shared";
import {HttpClientModule} from "@angular/common/http";
import {ClientModule} from "./client/client.module";
import {SharedModule} from "./shared/shared.module";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appConfigLoader = (appConfig: AppConfig) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClientModule,
    SharedModule,
    CKEditorModule,
    NgxWebstorageModule.forRoot(),
    NgbModule,
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
