import { FormsModule } from '@angular/forms'; // ✅ Add this
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule  // ✅ Required for ngModel and ngForm
  ],
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent {
  email = '';
  password = '';
  rememberMe = false;
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        this.authService.setToken(res.token);
        this.router.navigate(['/jobs']);
      },
      error: () => {
        this.error = 'Invalid credentials';
      }
    });
  }
}