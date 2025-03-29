import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class JobService {
  constructor(private http: HttpClient) {}

  getJobs(domain: string = '') {
    return this.http.get(`${environment.apiUrl}/jobs?domain=${domain}`);
  }

  applyJob(data: any) {
    return this.http.post(`${environment.apiUrl}/jobs/apply`, data);
  }
}
