import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'https://101322849-comp3133-assig2.vercel.app:4200';

  constructor(private http: HttpClient) { }

  addEmployee(employee: Employee): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-employee`, employee);
  }

  getEmployeeDetails(email: String): Observable<Employee> {
    const url = `${this.baseUrl}/view-employee/${email}`;
    return this.http.get<Employee>(url);
  }

  updateEmployee(email: string, employee: Employee): Observable<any> {
    const decodedEmail = decodeURIComponent(email);
    const url = `${this.baseUrl}/update-employee/${decodedEmail}`;
    return this.http.put(url, employee);
  }
  
  getEmployeeByEmail(email: string): Observable<Employee> {
    const url = `${this.baseUrl}/view-employee/${encodeURIComponent(email)}`;
    return this.http.get<Employee>(url);
  }

  deleteEmployee(email: string): Observable<any> {
    const url = `${this.baseUrl}/delete-employee/${encodeURIComponent(email)}`;
    return this.http.delete(url);
  }

  signup(user: User) {
    return this.http.post<any>(`${this.baseUrl}/signup`, user);
  }

  login(user: User) {
    return this.http.post<any>(`${this.baseUrl}/login`, user);
  }

  logout() {
    // Implement logout logic here
    // For example, you can clear the user's authentication token or session data
  }
}