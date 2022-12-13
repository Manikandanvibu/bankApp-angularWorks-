import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // acno=''
  // psw=''
  // amnt=''

  // acnoo=''
  // psww=''
  // amntt=''

  user=''

  constructor(private ds:DataService,private fb:FormBuilder){
    // acess login user name
     this.user=this.ds.currentuser
  }


  depositt=this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9]+')]],
  amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })

  withdraww=this.fb.group({acnoo:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psww:['',[Validators.required,Validators.pattern('[0-9]+')]],
  amntt:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })



  deposit(){
    var acno=this.depositt.value.acno
    var psw=this.depositt.value.psw
    var amnt=this.depositt.value.amnt

    const result=this.ds.deposit(acno,psw,amnt)

    if(this.depositt.valid){
      if(result){
        alert(`${amnt} credited to your ac and balance is ${result}`)
      }
      else{
        alert("incorect acno or password")
      }
    }
    else{
      alert("incorect name accno or password")
    }

  }
  withdraw(){
    var acnoo=this.withdraww.value.acnoo
    var psww=this.withdraww.value.psww
    var amntt=this.withdraww.value.amntt

    const resultt=this.ds.withdraw(acnoo,psww,amntt)

    if(this.withdraww.valid){
      if(resultt){
        alert(`${amntt} withdrawn from your ac and balance is ${resultt}`)
      }
    }
    else{
      alert("incorect name accno or password")
    }
  }
}
