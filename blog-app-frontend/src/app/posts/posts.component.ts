import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) { }


  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts)
  }

  ngOnInit() {
    this.getPosts();
  }

  posts: Post[];

}
