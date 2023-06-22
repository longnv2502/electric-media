import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientUiModule} from "./client-ui/client-ui.module";
import {AdminUiModule} from "./admin-ui/admin-ui.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminUiModule,
    ClientUiModule,
  ]
})
export class LayoutModule {
}
