import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: any = {
  }
  constructor(
    private authservice: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  signin() {
    this.authservice.signin(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/private']);
        },
        err => {
          console.log(err);
        }
      )
  }
}
