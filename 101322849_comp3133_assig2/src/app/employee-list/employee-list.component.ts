import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication-service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, HttpClientModule],
  providers: [AuthenticationService],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees: Employee[] = [];

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.http.get<Employee[]>('http://localhost:4000/employee-list')
      .subscribe((response: Employee[]) => {
        this.employees = response;
      });
  }
  deleteEmployee(employee: any) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.authService.deleteEmployee(employee.email).subscribe(() => {
        this.fetchEmployees();
      });
    }
  }
}