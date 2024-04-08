import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Employee } from '../employee';
import { AuthenticationService } from '../authentication-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink],
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers: [AuthenticationService]
})

export class AddEmployeeComponent {
  employee: Employee = {
    first_name: '',
    last_name: '',
    email: ''
  };

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  saveEmployee(): void {
    this.authenticationService.addEmployee(this.employee)
      .subscribe(() => {
        console.log('Employee added successfully');
        this.router.navigate(['/']);
      });
  }

}
