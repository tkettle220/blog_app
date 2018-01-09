import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(
    private postService: PostService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getPost(id);
  }

  getPost(id): void {
    this.postService.getPost(id)
      .subscribe(post => this.post = post)
  }

  goBack(): void {
    this.location.back();
  }

  post: Post;


}
