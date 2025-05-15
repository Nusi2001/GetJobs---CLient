import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{ title }}</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Jobs List';
  isDarkMode = false;

  constructor() {
    const savedTheme = localStorage.getItem('darkMode');
    this.isDarkMode = savedTheme === 'true';
    this.applyDarkMode();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.applyDarkMode();
  }

  applyDarkMode(): void {
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}