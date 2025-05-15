import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-material-layout-test',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule],
  templateUrl: './material-layout-test.component.html'
})
export class MaterialLayoutTestComponent {}