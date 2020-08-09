import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { WindowService } from './window.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AngularfireService {

  isLogged = false;
  userDetails: any;
  confirmResult: any;
  constructor(private afAuth: AngularFireAuth,
              private windowRef: WindowService) {
    // afAuth.authState.subscribe(user => {
    //   if (user === null) {
    //   this.isLogged.next(false);
    //   } else {
    //     this.userDetails = user;
    //   }
    // });
  }

  requestOTP(mobileNumber, applicationVerifier) {
    return this.afAuth.signInWithPhoneNumber('+91' + mobileNumber, applicationVerifier);
  }

  verifyOTP(OTP) {
    // implementation in future
  }

  logout(){
    this.afAuth.signOut();
  }

  userStatus(){
    return this.afAuth.authState.pipe(tap( user => {
      if (user) {
        this.isLogged = true;
        this.userDetails = user;
      } else {
        this.isLogged = false;
        this.userDetails = null;
      }
    }));
  }

}
