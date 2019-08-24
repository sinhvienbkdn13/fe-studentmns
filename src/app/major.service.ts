import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Major } from './major';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MajorService {

  private baseUrl = 'http://localhost:8080/api/v1/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getMajorList(): Observable<Major[]> {
    return this.http.get<Major[]>(`${this.baseUrl}/major`);
  }

  getMajorById(id: number): Observable<Major> {
    return this.http.get<Major>(`${this.baseUrl}/major/${id}`);
  }

  addMajor(major: Major): Observable<Major> {
    return this.http.post<Major>(`${this.baseUrl}/major`, major, this.httpOptions);
  }

}
