import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../app/auth/auth.service';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'domain', 'description', 'location', 'salary'];
  dataSource = new MatTableDataSource<any>();
  searchKey: string = '';
  jobs: any[] = [];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public authService: AuthService, private router: Router, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Jobs List');
    this.jobs = [
      { id: 1, title: 'Software Engineer', domain: 'IT', description: 'Develop software apps.', location: 'New York', salary: 120000 },
      { id: 2, title: 'Data Analyst', domain: 'Analytics', description: 'Analyze data sets.', location: 'San Francisco', salary: 95000 },
      { id: 3, title: 'Marketing Specialist', domain: 'Marketing', description: 'Marketing campaigns.', location: 'Remote', salary: 85000 },
      { id: 4, title: 'QA Tester', domain: 'Quality', description: 'Test software systems.', location: 'Chicago', salary: 90000 },
      { id: 5, title: 'DevOps Engineer', domain: 'Infrastructure', description: 'Manage deployments.', location: 'Austin', salary: 110000 },
      { id: 6, title: 'UX Designer', domain: 'Design', description: 'Design user interfaces.', location: 'Seattle', salary: 95000 },
      { id: 7, title: 'Project Manager', domain: 'Management', description: 'Lead software teams.', location: 'Boston', salary: 105000 },
      { id: 8, title: 'Technical Writer', domain: 'Documentation', description: 'Write manuals.', location: 'Remote', salary: 80000 },
      { id: 9, title: 'Frontend Developer', domain: 'Web', description: 'Build UI components.', location: 'Denver', salary: 100000 },
      { id: 10, title: 'Backend Developer', domain: 'Web', description: 'Develop APIs.', location: 'Houston', salary: 105000 },
      { id: 11, title: 'Mobile Developer', domain: 'Mobile', description: 'Build Android/iOS apps.', location: 'Los Angeles', salary: 108000 },
      { id: 12, title: 'Cloud Engineer', domain: 'Cloud', description: 'Cloud infrastructure.', location: 'Remote', salary: 115000 },
      { id: 13, title: 'AI Researcher', domain: 'AI', description: 'Build AI models.', location: 'San Jose', salary: 130000 },
      { id: 14, title: 'Security Analyst', domain: 'Security', description: 'Cybersecurity tasks.', location: 'Washington D.C.', salary: 112000 }
    ];

    this.dataSource = new MatTableDataSource(this.jobs);
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(): void {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onRowClick(row: any): void {
    this.router.navigate(['/job-details', row.id]);
  }
}