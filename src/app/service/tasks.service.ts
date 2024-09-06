import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private URL = 'http://localhost:3241/api';
  constructor(private http: HttpClient) { }
  getTasks() {
    return this.http.get<any>(this.URL + '/tasks');
  }
  getPrivat_Tasks() {
    return this.http.get<any>(this.URL + '/private-tasks');
  }
}
