import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../models/job';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.baseUrl}/jobs`);
  }

  getJob(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.baseUrl}/jobs/${id}`);
  }
}