import { Component } from '@angular/core';

@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrl: './login3.component.css'
})
export class Login3Component {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onLogin(): void {
    if (!this.email || !this.password) {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate login logic
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);

    // Redirect to dashboard or homepage after login
    alert('Login successful!');
  }
}
