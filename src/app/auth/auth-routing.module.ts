import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
