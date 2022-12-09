import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

currentuser=''
currentacno=''

  constructor() { }

  userDetails:any={
    1000:{acno:1000,username:"anu",password:123,balance:0,transcation:[]},
    1001:{acno:1001,username:"amal",password:123,balance:0,transcation:[]},
    1002:{acno:1002,username:"arun",password:123,balance:0,transcation:[]},
    1003:{acno:1003,username:"mega",password:123,balance:0,transcation:[]},
  }

  register(acno:any,uname:any,psw:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={acno,username:uname,password:psw,balance:0,transcation:[]}
      console.log(this.userDetails[acno]);
      return true
    }
  }
  
  login(acno:any,psw:any){
    // var acno called to avoid calling this.acno
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){
        // store username of login person
        this.currentuser=userDetails[acno]["username"]
        // store accno of login person for transcation purpose
        this.currentacno=acno
        return true
      }
      else{
        return false
      } 
    }
    else{
      return false
    }
  }

  deposit(acno:any,password:any,amount:any){
    var userDetails=this.userDetails

    var amnt=parseInt(amount)
    if(acno in userDetails){
      if(password==userDetails[acno]["password"]){
        userDetails[acno]["balance"]+=amnt
        userDetails[acno]['transcation'].push({type:'CREDIT',amount:amnt})
        return userDetails[acno]["balance"]
      }
      else{
        return false
      }
    }
    else{
      return false
    }

  }


  withdraw(acno:any,password:any,amount:any){
    var userDetails=this.userDetails

    var amntt=parseInt(amount)

    if(acno in userDetails){
      if(password==userDetails[acno]["password"]){
        if(amntt<=userDetails[acno]["balance"]){
          userDetails[acno]["balance"]-=amntt
          userDetails[acno]['transcation'].push({type:'DEBIT',amount:amntt})
          return userDetails[acno]["balance"]
        }
        else{
          alert('insufficient balance')
          return false
        }
      }
      else{
        alert("incorrect password")
        return false
      }
    }
    else{
      alert("insufficent ac no")
      return false
    }

  }


  // to return tanscation details
  gettransaction(acno:any){
    return this.userDetails[acno]["transcation"]
  }
}
