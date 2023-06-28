import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientComponent} from "./client.component";
import {HomeComponent} from "./home/home.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {NewspaperComponent} from "./newspaper/newspaper.component";
import {NewspaperListComponent} from "./newspaper/newspaper-list/newspaper-list.component";
import {NewspaperDetailsComponent} from "./newspaper/newspaper-details/newspaper-details.component";
import {NewspaperLatestComponent} from "./newspaper-latest/newspaper-latest.component";
import {AuthComponent} from "./auth/auth.component";
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";

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
        path: 'auth',
        component: AuthComponent,
        children:
          [
            {
              path: 'sign-in',
              component: SignInComponent
            },
            {
              path: 'sign-up',
              component: SignUpComponent
            }
          ]
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
