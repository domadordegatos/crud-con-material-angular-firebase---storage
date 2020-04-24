import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { PostService } from '../../posts/post.service';
import { PostI } from 'src/app/shared/models/post.inteface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts$: Observable<PostI[]>;
  constructor(private postSvc:PostService){}

    ngOnInit(){
      this.posts$ = this.postSvc.getAllPosts();
    }

}
