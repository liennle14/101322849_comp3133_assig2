import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private router: Router, private http: HttpClient) { }

  public signUp(): void {
    // Assuming you get this data from inputs
    const username = '';
    const password = '';

    this.http.post('/signup', {username, password}).subscribe(() => {
      this.goToHome();
    }, (error) => {
      console.error(error);
    });
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}