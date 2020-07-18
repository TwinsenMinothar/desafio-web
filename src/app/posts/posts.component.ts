import { Post } from './../post';
import { JsonPlaceHolderService } from './../json-place-holder.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(
    private jsonPlaceHolderService: JsonPlaceHolderService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.jsonPlaceHolderService.getPosts().subscribe(json => this.posts = json );
  }

}
