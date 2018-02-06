import { Component, OnInit, Input } from '@angular/core';
import { TourService } from '../tour.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user';
import { subscribeOn } from 'rxjs/operator/subscribeOn';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  //@Input() 
  user: User
  success: Boolean = false;

  constructor(private tourService: TourService, private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
  }

  attemptLogin(username: string, password: string): void{
    username = username.trim();
    password = password.trim();
    if (!username || !password) { return; }
    var user: User = {
      username: username,
      password: password

    };
    this.tourService.userLogin(user).subscribe(data => {console.log(data); if(data){this.success = true};});
    if(this.success)
    {
      this.router.navigate(['tours/' + username])
    }
    else{
      console.log("Failed to login")
    }

  }

}
