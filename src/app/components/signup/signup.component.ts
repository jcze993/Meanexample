import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: any = {
  }//si falla ponele email:'', password:''
  constructor(
    private autservice: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  signup() {
    this.autservice.signup(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/private']); //lo redirecciona a la parte privada
        },
        err => {
          console.log(err);
        }
      )
  }

}
