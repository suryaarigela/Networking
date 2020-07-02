import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private readonly postServ:PostsService) { 
    this.postServ.postImage$.subscribe(data=>{
      if(data==true){
        this.postServ.getImage(this.imageName);
      }
    })

    this.postServ.getImage$.subscribe(data=>{
      this.retrievedImage=data;
    })
  }

  ngOnInit(): void {
  }

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];

  }

  //Gets called when the user clicks on submit to upload the image

  onUpload() {

    console.log(this.selectedFile);
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    //Make a call to the Spring Boot Application to save the image
   this.postServ.postImage(uploadImageData);
  }

    //Gets called when the user clicks on retieve image button to get the image from back end



}

