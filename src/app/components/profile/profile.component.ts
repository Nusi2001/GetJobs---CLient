import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <h2>Profile</h2>
    <p><strong>Email:</strong> {{ user?.email }}</p>
    <p><strong>Role:</strong> {{ user?.role || 'User' }}</p>
  `,
  styles: [`h2 { margin-bottom: 20px; }`]
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser();
  }
}