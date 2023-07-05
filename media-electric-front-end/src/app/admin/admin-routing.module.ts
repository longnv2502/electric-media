import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {BaseComponent} from "./base/base.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {UserManagerComponent} from "./user/manager/user-manager.component";
import {UserEditComponent} from "./user/edit/user-edit.component";
import {CommentManagerComponent} from "./comment/manager/comment-manager.component";
import {CommentEditComponent} from "./comment/edit/comment-edit.component";
import {NewspaperManagerComponent} from "./newspaper/manager/newspaper-manager.component";
import {NewspaperEditComponent} from "./newspaper/edit/newspaper-edit.component";
import {CategoryManagerComponent} from "./category/manager/category-manager.component";
import {CategoryEditComponent} from "./category/edit/category-edit.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: BaseComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
          {
            path: 'users',
            component: UserManagerComponent,
          },
          {
            path: 'users/edit',
            component: UserEditComponent
          },
          {
            path: 'comments',
            component: CommentManagerComponent,
          },
          {
            path: 'comments/edit',
            component: CommentEditComponent
          },
          {
            path: 'newspapers',
            component: NewspaperManagerComponent,
          },
          {
            path: 'newspapers/edit',
            component: NewspaperEditComponent
          },
          {
            path: 'categories',
            component: CategoryManagerComponent,
          },
          {
            path: 'categories/edit',
            component: CategoryEditComponent
          }
        ]
      },
      {
        path: 'login',
        component: SignInComponent,
      },
      {
        path: 'register',
        component: SignUpComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
