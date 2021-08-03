import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/services/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileContainerComponent implements OnInit {

  public constructor(private userService:UserService) {}
  public user$: Observable<User> = this.userService.getUser();
  
  ngOnInit(): void {
  }

}
