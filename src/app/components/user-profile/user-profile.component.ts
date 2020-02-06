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
  upcomingChests;
  battleLog;

  constructor(private fb: FormBuilder, private userService: UserProfileService) { }

  ngOnInit() {
    this.userProfile = this.fb.group({
        tag: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  searchUser() {
    this.userService.getPlayerByTag(this.userProfile.value.tag).subscribe(
      result =>{
        this.user = result;
        console.log(this.user);
        this.searchUpcomingChests();
        this.getBattleLog();
      }, 
      error => {
        console.log(error);
      }
    );
  }

  newSearch() {
    this.user = undefined;
    this.userProfile.value.tag = "";
  }

  searchUpcomingChests() {
    this.userService.getUpcomingChestsOfPlayerByTag(this.userProfile.value.tag).subscribe(
      res => {
        this.upcomingChests = res.items;
        this.fedUpcomingChests();
      }, 
      err => {
        console.log(err);
      }
    );
  }

  fedUpcomingChests() {
    this.upcomingChests.forEach(chest => {
      switch(chest.name) {
        case 'Silver Chest':
          chest.image = 'https://cdn.statsroyale.com/images/silver-chest.png';
          break;
        case 'Golden Chest':
          chest.image = 'http://cdn.statsroyale.com/images/golden-chest.png';
          break;
        case 'Giant Chest': 
          chest.image = 'https://cdn.statsroyale.com/images/giant-chest.png';
          break;
        case 'Magical Chest':
          chest.image = 'https://cdn.statsroyale.com/images/magical-chest.png';
          break;
        case 'Legendary Chest':
          chest.image = 'https://cdn.statsroyale.com/images/legendary-chest.png';
          break;
        case 'Epic Chest': 
          chest.image = 'https://cdn.statsroyale.com/images/epic-chest.png';
          break;
        case 'Mega Lightning Chest': 
          chest.image = 'https://cdn.statsroyale.com/images/super-lightning-chest.png';
          break;
        default:
          console.log('BAÚ NÃO ENCONTRADO');
      }
    });
  }

  getBattleLog() {
    this.userService.getBattleLogOfPlayerByTag(this.userProfile.value.tag).subscribe(
      res => {
        this.battleLog = res;
        console.log(this.battleLog);
      }, 
      err => {
        console.log(err);
      }
    );
  }
}
