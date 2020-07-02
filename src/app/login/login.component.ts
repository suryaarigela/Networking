import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private readonly userServ: UserService ) {
        // redirect to home if already logged in
       /*  if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        } */
        this.userServ.isAuth$.subscribe(data=>{
          if(data==true){
             this.router.navigate(['home']);
          }
        })
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
      this.userServ.isAuthorized({
        name:this.loginForm.get('username').value,
        password:this.loginForm.get('username').value
      })
    }

    register(){
      this.router.navigate(['signup']);
    }

}
