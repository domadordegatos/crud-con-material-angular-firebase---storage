import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserI } from 'src/app/shared/models/user.interface';
import { FileI } from 'src/app/shared/models/file.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public image: FileI;
  public currentImage = 'https://begmetobuyit.com/application/css/images/noImage.jpg';

  constructor(private authSvc:AuthService) { }

  public profileForm = new FormGroup({
    displayName: new FormControl('', Validators.required),
    email: new FormControl({value:'', disable:true }, Validators.required),
    photoURL: new FormControl('', Validators.required),
  });

  onSaveUser(user: UserI): void {
    this.authSvc.preSaveUserProfile(user, this.image);
  }

  private initValuesForm(user: UserI): void {
    if(user.photoURL){
      this.currentImage = user.photoURL;
    }
    this.profileForm.patchValue({
      displayName: user.displayName,
      email: user.email,
    });
  }

  ngOnInit(): void {
    this.authSvc.userData$.subscribe(user=>{
     this.initValuesForm(user);
     console.log('user: ', user);
    })
  }
  handleImage(image:FileI): void{
    this.image = image;
  }

}
