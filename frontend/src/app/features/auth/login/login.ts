import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; //[cite: 1]

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: false
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  // Inject the Router here[cite: 1]
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // THIS IS THE LINE THAT FIXES YOUR SCREENSHOT[cite: 1]
      this.router.navigate(['/dashboard']);
    }
  }
}
