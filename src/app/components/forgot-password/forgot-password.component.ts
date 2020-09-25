import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ForgotPasswordComponent implements OnInit {
  email  : string;
   

  constructor(private router:Router) { }

  ngOnInit() {
  }

  /**
     * send method is used to send a reset password link into your email.
     */
    send(value) {
     // this.authService.resetPasswordV2(value);

    }
}
