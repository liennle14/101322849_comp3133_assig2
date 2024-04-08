import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../authentication-service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [AuthenticationService],
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = {
    first_name: '',
    last_name: '',
    email: ''
  };

  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private router: Router,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    const email = this.route.snapshot.paramMap.get('email') as string;
    this.authenticationService.getEmployeeByEmail(email).subscribe((employee: Employee) => {
      this.employee = employee;
    });
  }
  
  updateEmployee(): void {
    const email = this.route.snapshot.paramMap.get('email') as string;
    this.authenticationService.updateEmployee(encodeURIComponent(email), this.employee)
  .subscribe(() => {
    console.log('Employee updated successfully');
    this.router.navigate(['/']);
  });
  }

  goBack(): void {
    this.location.back();
  }
}