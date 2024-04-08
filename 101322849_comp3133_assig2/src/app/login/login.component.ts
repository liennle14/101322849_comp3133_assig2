import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication-service';
import { FormsModule } from '@angular/forms';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private router: Router, private authService: AuthenticationService, private http: HttpClient) { }
  login() {
    this.authService.login({ email: this.email, password: this.password });
  }
  goToSignUp(): void {
    this.router.navigate(['/signup']);
  }
}
