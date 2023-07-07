import {Injectable, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {lastValueFrom} from "rxjs";

export let SERVER_API_URL: string;

@Injectable({
  providedIn: "root"
})
export class AppConfig {
  public static SERVER_API_URL: string;
  public appConfig: Object | undefined;

  constructor(private injector: Injector) {
  }

  loadAppConfig() {
    const http = this.injector.get(HttpClient);
    const configPath = 'assets/config/application.json';
    const appConfig$ = http.get(configPath);
    const appConfigPromise = lastValueFrom(appConfig$);
    return appConfigPromise
      .then((data) => {
        if (data) {
          // @ts-ignore
          AppConfig.SERVER_API_URL = data['SERVER_API_URL'];
        }
        SERVER_API_URL = AppConfig.SERVER_API_URL;
        this.appConfig = data;
      });
  }

  get config() {
    return this.appConfig;
  }
}
