import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ILink } from 'src/app/interfaces/link.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  constructor (private authService: AuthService, private router: Router) {}
public links: Array<ILink> = [
  {
    url: "",
    title: "All shows",
  },
  {
    url: "/top-rated",
    title: "Top rated",
  },
  {
    url: "#",
    title: "My profile",
  },

  {
    url: "/register",
    title: "Register",
  },
];
public logOut(): void{
  this.authService.logOut();
  this.router.navigate(['/login']);
}

}
