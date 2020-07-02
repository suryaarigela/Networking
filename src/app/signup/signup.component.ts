import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router  ,
    private readonly userServ:UserService  ) {
    this.userServ.regUser$.subscribe(data=>{if(data!=null){
      
    }
   
  })
}

ngOnInit() {
    this.signUpForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],  confirmPassword: ['', Validators.required],
        phoneNumber: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

onSubmit(){
   this.userServ.registerUser({
     name:this.signUpForm.get('username').value,
     password:this.signUpForm.get('password').value,
     phoneNumber:this.signUpForm.get('phoneNumber').value
   });

   this.router.navigate(['']);
}

login(){
  this.router.navigate(['']);
}

}
