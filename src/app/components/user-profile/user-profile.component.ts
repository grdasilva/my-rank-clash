import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfile: FormGroup;
  user;
  constructor(private fb: FormBuilder, private userService: UserProfileService) { }

  ngOnInit() {
    this.userProfile = this.fb.group({
        tag: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  searchUser() {
    this.userService.getPlayerByTag(this.userProfile.value.tag).subscribe(user => (this.user = user));
    console.log(this.user)
  }
}
