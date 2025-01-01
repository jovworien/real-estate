import { Component } from '@angular/core';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrl: './signup1.component.css'
})
export class Signup1Component {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Handle sign-up logic here (e.g., send data to backend API)
    console.log('Sign Up:', {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
    });
  }
}
