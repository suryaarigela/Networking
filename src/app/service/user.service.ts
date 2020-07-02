import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {User} from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders();
  private isAuthSub = new BehaviorSubject<boolean>(null);

  isAuth$= this.isAuthSub.asObservable();

  private getAllUserSub = new BehaviorSubject<User[]>(null);

  getAllUserSub$= this.getAllUserSub.asObservable();

  private regUserSub = new BehaviorSubject<User>(null);

  regUser$= this.regUserSub.asObservable();

  constructor(private readonly http:HttpClient) { 
   

  }

  getAllUsers(){
    this.http.get<User[]>('http://localhost:8080/api/allUsers').subscribe(data=>{
      this.getAllUserSub.next(data);
    });
  }

  registerUser(user: User) {
    this.http.post<User>('http://localhost:8080/api/registerUser', user,httpOptions).subscribe(

      val => {
        this.regUserSub.next(val);
      },
      response => {
        console.log("PUT call in error", response);
      },
      () => {
        console.log("The PUT observable is now completed.");
      }
    )
  }

  isAuthorized(user:User){
    this.http.post<boolean>('http://localhost:8080/api/isAuthorized', user,httpOptions).subscribe(data=>{
      this.isAuthSub.next(data);
    })

  }

}
