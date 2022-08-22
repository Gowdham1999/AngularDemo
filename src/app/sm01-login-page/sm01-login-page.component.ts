import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sm01-login-page',
  templateUrl: './sm01-login-page.component.html',
  styleUrls: ['./sm01-login-page.component.scss']
})
export class Sm01LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  username: string | any = ''
  password: string | any = ''
  errorMessage: string | any = ''
  // invalidPassword: boolean = false

  onSubmit() {
    console.log(this.username, this.password)

    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigate(['/home'])
    }
    else {
      // this.invalidPassword = true
      this.username = null
      this.password = null
      this.errorMessage = 'Invalid username or password. Please try again'
    }

  }

  hideMessage() {
    this.errorMessage = ''
    // this.invalidPassword = false
  }

}
