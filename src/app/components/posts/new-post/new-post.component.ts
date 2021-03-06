import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { PostI } from 'src/app/shared/models/post.inteface';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  public image:any;
  constructor(private postSvc:PostService) { }
  public newPostForm = new FormGroup({
    titlePost: new FormControl('', Validators.required),
    contentPost: new FormControl('', Validators.required),
    tagsPost: new FormControl('', Validators.required),
    imagePost: new FormControl('', Validators.required),
  })
  
  ngOnInit(): void {
  }
  addNewPost(data:PostI){
    console.log('new post',data);
    this.postSvc.preAddAndUpdatePost(data, this.image);
  }
  handleImage(event:any): void{
    this.image = event.target.files[0];
    //console.log('image: ',this.image);
    
  }
}
