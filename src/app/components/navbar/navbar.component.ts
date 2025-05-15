import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public authService: AuthService, private snackBar: MatSnackBar) {}
logout(): void {
    this.authService.logout();
    this.snackBar.open(
      '🔐 You’ve been logged out successfully. Thanks for visiting!',
      'Close',
      {
        duration: 4000,
        panelClass: ['logout-snackbar']
      }
    );
  }
}