import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from './models/mission';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.spacexdata.com/v3'; // Base URL of the REST API

  constructor(private http: HttpClient) { }

  // Method to fetch missions data from the REST API
  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.apiUrl}/launches`);
  }

  // Method to fetch mission details by flight number
  getMissionDetails(flightNumber: string): Observable<Mission> {
    return this.http.get<Mission>(`${this.apiUrl}/launches/${flightNumber}`);
  }

}