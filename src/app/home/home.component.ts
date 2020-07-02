import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Title:string;
  constructor(private readonly router:Router) {
   
  }

  ngOnInit(): void {
    this.Title='Dashboard'
  }

  goDashBoard(){
    this.Title='Dashboard'
    this.router.navigate(['home/'])
  }

  goPosts(){
    this.Title='Posts'
    this.router.navigate(['home/posts'])
  }

  goUsers(){
    this.Title='Users'
    this.router.navigate(['home/users'])
  }

  goCategories(){
    this.Title='Category'
    this.router.navigate(['home/category'])
  }
  

}
