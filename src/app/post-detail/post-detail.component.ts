import { JsonPlaceHolderService } from './../json-place-holder.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
    post: Post;
  constructor(
    private route: ActivatedRoute,
    private jsonPlaceHolderService: JsonPlaceHolderService
  ) { }

  getPost(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.jsonPlaceHolderService.getPost(id).subscribe(post => this.post = post);
  }

  ngOnInit(): void {
    this.getPost();
  }

}
