/**
 * Created by EdgeTech on 8/31/2016.
 */
export const LOGIN_TEMPLATE = `<article id="LoginView"><section id="hero"><aside><div class="app-logo"><img src="{{STATIC_DOMAIN}}/res/images/logo/logo-line-white.png"></div></aside><aside><div id="loginForm" class="step"><form [formGroup]="loginForm" (ngSubmit)="onSubmit($event)"><div class="error">{{error}}</div><div class="form-group"><input class="form-control" autocomplete="off" placeholder="johndoe@example.com" formControlName="email" required><div class="control" *ngIf="loginForm.controls.email.dirty"><i class="icon-common" [ngClass]="{'icon-passed': loginForm.controls.email.valid, 'icon-failed' : loginForm.controls.email.errors}"></i></div></div><div class="form-group"><input class="form-control" autocomplete="off" type="password" placeholder="Password" formControlName="password" required><div class="control" *ngIf="loginForm.controls.password.dirty"><i class="icon-common" [ngClass]="{'icon-passed': loginForm.controls.password.valid, 'icon-failed' : loginForm.controls.password.errors}"></i></div></div><div class="form-group"><button type="submit" class="btn btn-primary submit" [disabled]="isGrinding"><span class="text">LOG IN</span> <span class="glyphicon glyphicon-chevron-right"></span> <svg class="svg-grind"></svg></button></div></form></div><div id="emailNotSent" class="step"><p class="title">Oops...</p><p class="details">Your login was not successful because you haven't confirmed your account. Please check your inbox to proceed, we must have sent you your confirmation email. You can try resending the email, if you didn't receive it.</p><p class="details centerText"><button class="btn btn-primary" [disabled]="isGrinding" (click)="resendEmail()"><span class="text">Resend Email</span> <svg class="svg-grind"></svg></button> <button class="btn btn-info" [disabled]="isGrinding" (click)="openConfirm()"><span class="text">Confirm Account</span></button></p></div><div id="emailResent" class="step"><p class="title">Confirm Account.</p><p class="details">A confirmation email has been resent along with an OTP. Please confirm your account with it.</p><div class="error centerText">{{otpError}}</div><p class="content center-block"><input class="form-control otp" type="input" [formControl]="otpControl" placeholder="123456"> <span class="control" *ngIf="otpControl.dirty"><i class="icon-common" [ngClass]="{'icon-passed': otpControl.valid, 'icon-failed' : otpControl.errors}"></i></span></p><p class="details centerText"><button class="btn btn-info" (click)="openEmailNotSent()"><span class="text">Back</span></button> <button class="btn btn-primary" [disabled]="isGrinding || otpControl.errors || otpControl.pristine" (click)="confirmAccount()"><span class="text">Confirm Account</span> <svg class="svg-grind"></svg></button></p></div><div id="accountConfirmed" class="step"><p class="title">Congrats...</p><p class="details">Your account has been successfully confirmed, please login to continue.</p><p class="details centerText"><button class="btn btn-primary" [disabled]="isGrinding" (click)="startAgain()"><span class="text">LOGIN</span></button></p></div><div id="issh" class="step"><p class="title">Issh...</p><p class="details">Sorry, your login was not successfull. We are not really sure what went wrong. Please try again.</p><p class="details centerText"><button class="btn btn-primary" [disabled]="isGrinding" (click)="startAgain()"><span class="text">LOGIN AGAIN</span></button></p></div></aside></section><footer><div class="bottom-strip"></div><div class="row bottom-footer"><div class="col-sm-6 copyright"><span>© Copyright 2016 Rider.</span></div><div class="col-sm-6 made"><span>Made with <span class="love-icon"></span> in Lagos</span></div></div></footer></article>`;

const  LOGIN_STYLE = `#LoginView{width:100%;height:100%;background-color:#31393A;font-family:"Lato"}#LoginView section#hero{display:-ms-flexbox;display:flex;height:100%;width:100%;padding:100px}#LoginView section#hero aside{height:100%;-ms-flex-positive:1;flex-grow:1;padding:50px;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}#LoginView section#hero aside:first-child:before{content:'';position:absolute;width:1px;height:100%;background:linear-gradient(#31393A, #818a91, #31393A);top:30px;right:0}#LoginView section#hero aside:first-child .app-logo{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}#LoginView section#hero aside:first-child .app-logo img{height:50px}#LoginView section#hero aside:last-child{width:400px}#LoginView section#hero aside:last-child .error{color:#d9534f;font-size:.875rem}#LoginView section#hero aside:last-child form{width:300px}#LoginView section#hero aside:last-child form .form-group{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}#LoginView section#hero aside:last-child form .form-group input{width:270px;color:#fff;padding:10px;border:2px solid #818a91;border-radius:5px;background:transparent}#LoginView section#hero aside:last-child form .form-group input:-webkit-autofill{-webkit-box-shadow:0 0 0px 1000px #31393A inset;-webkit-text-fill-color:white !important}#LoginView section#hero aside:last-child form .form-group .control{width:30px;padding:10px 0 0 10px}#LoginView section#hero aside:last-child form .form-group button{font-family:"League Spartan";font-weight:bold;font-size:13px}#LoginView section#hero .step#emailNotSent,#LoginView section#hero .step#issh,#LoginView section#hero .step#emailResent,#LoginView section#hero .step#accountConfirmed{display:none;color:#fff;padding:20px;text-align:center;width:400px}#LoginView section#hero .step#emailNotSent .title,#LoginView section#hero .step#issh .title,#LoginView section#hero .step#emailResent .title,#LoginView section#hero .step#accountConfirmed .title{font-size:1.5rem;font-family:"League Spartan"}#LoginView section#hero .step#emailNotSent .details,#LoginView section#hero .step#issh .details,#LoginView section#hero .step#emailResent .details,#LoginView section#hero .step#accountConfirmed .details{font-size:.875rem}#LoginView section#hero .step#emailNotSent .details button:nth-child(2),#LoginView section#hero .step#issh .details button:nth-child(2),#LoginView section#hero .step#emailResent .details button:nth-child(2),#LoginView section#hero .step#accountConfirmed .details button:nth-child(2){margin-left:10px}#LoginView section#hero .step#emailResent .content{width:235px;padding:10px 0;display:-ms-flexbox;display:flex}#LoginView section#hero .step#emailResent .content input.otp{padding-left:0;padding-right:0;background:transparent;border-radius:0;border:1px solid #55595c;font-family:"League Spartan";font-size:1.5rem;width:250px;color:white;letter-spacing:20px;text-align:center}#LoginView section#hero .step#emailResent .content .control{width:30px;padding:10px 0 0 10px}`;

export const LOGIN_STYLES =  [LOGIN_STYLE];