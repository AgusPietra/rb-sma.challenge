import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthentService } from '../authent.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ServerResponse} from '../../shared/server-response.model';
import {User} from '../user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private userAlreadyTaken: Boolean;

  constructor(private authService: AuthentService,
              private router: Router,
              private route: ActivatedRoute) {
    this.userAlreadyTaken = false;
  }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    this.authService.signupUser(new User(form.value.username, form.value.password, form.value.email))
      .subscribe(
        (data: ServerResponse) => {
          if ( +data.code === 0 ) {
            this.authService.setAuthenticated(form.value.username);
            this.router.navigate(['../boards'], {relativeTo: this.route});
          }
          else {
            this.userAlreadyTaken = true;
          }
        },
        (error) => {
          console.log('error msg: ');
          console.log(error);
        }
      );
    // this.dataStorageService.storeRecipes()
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //     }
    //   );
  }

  onUsernameChange() {
    this.userAlreadyTaken = false;
  }

}
