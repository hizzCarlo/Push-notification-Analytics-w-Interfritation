import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { ApiService } from 'path-to-your-api-service'; // Assuming you have an ApiService for making HTTP requests

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class Login implements OnInit {
  // loginForm: FormGroup;

  // constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { }

  // ngOnInit(): void {
  //   this.loginForm = this.formBuilder.group({
  //     username: [''],
  //     password: ['']
  //   });
  // }

  // onSubmit(): void {
  //   this.apiService.login(this.loginForm.value).subscribe(
  //     (resp: any) => {
  //       if (resp === 1) {
  //         this.router.navigate(['index.php', { page: 'home' }]);
  //       } else {
  //         // Handle invalid login
  //         // For demonstration, you can log a message
  //         console.log('Username or password is incorrect.');
  //       }
  //     },
  //     (err: any) => {
  //       // Handle error
  //       console.error(err);
  //     }
  //   );
  // }

  // restrictToNumbers(event: KeyboardEvent): void {
  //   const inputChar = String.fromCharCode(event.keyCode);
  //   const regex = new RegExp('[0-9 \,]');
  //   if (!regex.test(inputChar)) {
  //     event.preventDefault();
  //   }
//   }
// }
