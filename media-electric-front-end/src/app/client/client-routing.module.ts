import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientComponent} from "./client.component";
import {HomeComponent} from "./home/home.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {NewspaperComponent} from "./newspaper/newspaper.component";
import {NewspaperListComponent} from "./newspaper/newspaper-list/newspaper-list.component";
import {NewspaperDetailsComponent} from "./newspaper/newspaper-details/newspaper-details.component";
import {NewspaperLatestComponent} from "./newspaper-latest/newspaper-latest.component";

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'newspaper',
        component: NewspaperComponent,
        children:
          [
            {
              path: '',
              component: NewspaperListComponent
            },
            {
              path: ':id',
              component: NewspaperDetailsComponent
            }
          ]
      },
      {
        path: 'newspaper-latest',
        component: NewspaperLatestComponent
      },
      {
        path: 'about',
        component: AboutUsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
