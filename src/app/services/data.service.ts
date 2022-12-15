import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
userDetails:any
currentuser=''
currentacno=''

  constructor() { 
    this.getdeatails()
  }
// method for storaing in localstorage
savedetails(){
  if(this.userDetails){
  localStorage.setItem("databse",JSON.stringify(this.userDetails))
  }
  if(this.currentacno){
    localStorage.setItem("currentacno",JSON.stringify(this.currentacno))
    }
  if(this.currentuser){
  localStorage.setItem("currentuser",JSON.stringify(this.currentuser))
  }
}

// method for getting details from localstorage
// || '' is used because in angular there is not sure of getting data from databse so if the databse is also empty we need no mention an (or string)

getdeatails(){
  if(localStorage.getItem('databse')){
    this.userDetails=JSON.parse(localStorage.getItem('databse') || '')
  }
  if(localStorage.getItem('currentuser')){
    this.currentuser=JSON.parse(localStorage.getItem('currentuser') || '')
  }
  if(localStorage.getItem('currentacno')){
    this.currentacno=JSON.parse(localStorage.getItem('currentacno') || '')
  }
}

  // userDetails:any={
  //   1000:{acno:1000,username:"anu",password:123,balance:0,transcation:[]},
  //   1001:{acno:1001,username:"amal",password:123,balance:0,transcation:[]},
  //   1002:{acno:1002,username:"arun",password:123,balance:0,transcation:[]},
  //   1003:{acno:1003,username:"mega",password:123,balance:0,transcation:[]},
  // }

  register(acno:any,uname:any,psw:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={acno,username:uname,password:psw,balance:0,transcation:[]}
      console.log(this.userDetails[acno]);
      this.savedetails()
      return true
    }
  }
  
  login(acno:any,psw:any){
    // var acno called to avoid calling this.acno
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){
        // store accno of login person for transcation purpose
        this.currentacno=acno
        // store username of login person
        this.currentuser=userDetails[acno]["username"]

        this.savedetails()
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
        
        this.savedetails()

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

          this.savedetails()

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
