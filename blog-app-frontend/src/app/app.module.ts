import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './post.service';
import { AppRoutingModule } from './app-routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
