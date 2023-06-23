import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LayoutModule} from "./layout/layout.module";
import {ClientUiModule} from "./layout/client-ui/client-ui.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    ClientUiModule,
  ],
  declarations: [
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    ClientUiModule,
  ],
  schemas: []

})
export class SharedModule {
}
