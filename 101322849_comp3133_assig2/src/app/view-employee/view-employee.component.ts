import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication-service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, HttpClientModule],
  providers: [AuthenticationService],
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  selectedEmployee?: Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const email = this.route.snapshot.paramMap.get('email');
    if (!email) return;
    
    this.authService.getEmployeeDetails(email)
      .subscribe((employee: Employee) => this.selectedEmployee = employee);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
//stopped at 3:28