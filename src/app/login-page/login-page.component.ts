import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  acno=''
  psw=''
  // database storage
  userDetails:any={
    1000:{acno:1000,username:"anu",password:123,balance:0},
    1001:{acno:1001,username:"amal",password:123,balance:0},
    1002:{acno:1002,username:"arun",password:123,balance:0},
    1003:{acno:1003,username:"mega",password:123,balance:0},
  }
  // // acc and psw chane capturing from input
  // acnoChange(event:any){
  //   this.acno=event.target.value
  
  // }
  // pswchange(event:any){
  //   this.psw=event.target.value
    
  // }
  // // checks input and databse for login
  // login(){
  //   // var acno called to avoid calling this.acno
  //   var acno=this.acno
  //   var psw=this.psw
  //   var userDetails=this.userDetails
  //   if(acno in userDetails){
  //     if(psw==userDetails[acno]["password"]){
  //       alert("login successfull")
  //     }
  //     else{
  //       alert("wrong password")
  //     } 
  //   }
  //   else{
  //     alert("user not excist")
  //   }
  // }

  login(a:any,b:any){
    
    this.acno=a.value
    this.psw=b.value

    var acno=this.acno
    var psw=this.psw
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){
        alert("login successfull")
      }
      else{
        alert("wrong password")
      } 
    }
    else{
      alert("user not excist")
    }
  }
  
}
