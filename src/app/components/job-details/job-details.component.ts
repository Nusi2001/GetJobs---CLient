import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../services/job.service';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  job: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jobService.getJob(id).subscribe(job => {
      this.job = job;
      this.titleService.setTitle(job.title || 'Job Details');
    });
  }

  apply() {
    alert(`Applied for ${this.job?.title}`);
  }

  goBack() {
    this.router.navigate(['/jobs']);
  }
}