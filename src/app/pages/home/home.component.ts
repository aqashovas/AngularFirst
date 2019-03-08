import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/app/models/post.interface';
import { error } from '@angular/compiler/src/util';
import { User } from 'src/app/models/user.interface';
import { Photo } from 'src/app/models/photo.interface';
import { Comment } from 'src/app/models/comment.interface';
import { Album } from 'src/app/models/album.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public posts:Post[];
public users:User[];
public photos:Photo[];
public comments:Comment[];
public albums:Album[];



  constructor(private http:HttpClient) { 
    this.GetPosts();
    this.GetUsers();
    this.GetAlbums();
    this.GetComments();
    this.GetPhotos();
  }

  ngOnInit() {

    
  }

// GetPosts(){
//   this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts").subscribe(result => {
//       this.posts = result;
//   )};
GetPosts() {
  this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts").subscribe(result => {
    this.posts = result;
  });
}
GetUsers() {
  this.http.get<User[]>("https://jsonplaceholder.typicode.com/users").subscribe(result => {
    this.users = result;
  });
}
GetComments() {
  this.http.get<Comment[]>("https://jsonplaceholder.typicode.com/comments").subscribe(result => {
    this.comments = result;
  });
}
GetAlbums() {
  this.http.get<Album[]>("https://jsonplaceholder.typicode.com/albums").subscribe(result => {
    this.albums = result;
  });
}
GetPhotos() {
  this.http.get<Photo[]>("https://jsonplaceholder.typicode.com/photos").subscribe(result => {
    this.photos = result;
  });
}
}
