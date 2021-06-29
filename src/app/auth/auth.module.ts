import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AngularMaterialModule } from '../material.module';

@NgModule({
  declarations: [LoginComponent, CreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    AngularMaterialModule,
  ],
})
export class AuthModule {}
