import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialogConfig, MatDialog} from '@angular/material/dialog'
import { PostDialogComponent } from './dialogs/post-dialog/post-dialog.component';
import { CategoryDialogComponent } from './dialogs/category-dialog/category-dialog.component';
import { UserDialogComponent } from './dialogs/user-dialog/user-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  posts:string[]=['1','2','3','1','2','3','1','2','3','1','2','3','1','2','3'   ]
  displayedColumns:string[]=['sno','title','category','date']
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private readonly dialog:MatDialog) { }

  isDataAvailable(){
     if(this.dataSource.data.length>0){
       return true
     }else{
       return false
     }
  }
  

  addPostModal(){
    const dialogRef=new MatDialogConfig();
    dialogRef.height='90%'
    dialogRef.width='70%'
    const ref=this.dialog.open(PostDialogComponent,dialogRef)
    ref.afterClosed().subscribe(()=>{
      console.log('dialog closed')
    })
  }

  addCategoryModal(){
    const dialogRef=new MatDialogConfig();
    dialogRef.height='90%'
    dialogRef.width='70%'
    const ref=this.dialog.open(CategoryDialogComponent,dialogRef)
    ref.afterClosed().subscribe(()=>{
      console.log('dialog closed')
    })
  }

  addUserModal(){
    const dialogRef=new MatDialogConfig();
    dialogRef.height='90%'
    dialogRef.width='70%'
    const ref=this.dialog.open(UserDialogComponent,dialogRef)
    ref.afterClosed().subscribe(()=>{
      console.log('dialog closed')
    })
  }


}
