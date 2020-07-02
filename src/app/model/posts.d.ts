export interface Posts{
    userName:string;
    userId:string;
    content:string;
    id?:string;
    title:string;
    imgUrl:string;
    likes:number;
    dislikes:number;
    commentsNr:number;
    comments:string[];
}