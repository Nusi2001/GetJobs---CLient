import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthLoginComponent } from './auth-login/auth-login.component';

@NgModule({
  declarations: [AuthLoginComponent],
  imports: [CommonModule, FormsModule],
  exports: [AuthLoginComponent]
})
export class AuthModule {}