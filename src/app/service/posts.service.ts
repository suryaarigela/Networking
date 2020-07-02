import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postImageSub = new BehaviorSubject<boolean>(null);

  postImage$= this.postImageSub.asObservable();

  private getImageSub = new BehaviorSubject<any>(null);

  getImage$= this.getImageSub.asObservable();

  constructor(private readonly http:HttpClient) { 
  }

  postImage(uploadImageData:FormData){
    this.http.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })

    .subscribe((response) => {

      if (response.status === 200) {
       this.postImageSub.next(true);
      }else{
        this.postImageSub.next(false);
      }

    }

    );
  }

  getImage(imgname:string){
    this.http.get('http://localhost:8080/image/get/' + imgname)
    .subscribe(
      res => {
        let retrieveResonse:any = res;
        let base64Data = retrieveResonse.picByte;
       this.getImageSub.next('data:image/jpeg;base64,' + base64Data)
      }
    );
  }
}
