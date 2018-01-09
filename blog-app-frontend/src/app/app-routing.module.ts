import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'posts', component: PostsComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [  RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {

}
