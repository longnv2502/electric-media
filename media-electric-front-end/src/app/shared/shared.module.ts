import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LayoutModule} from "./layout/layout.module";
import {ClientUiModule} from "./layout/client-ui/client-ui.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
  ],
  declarations: [
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
  ],
  schemas: []

})
export class SharedModule {
}
