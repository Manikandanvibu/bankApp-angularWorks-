import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  acno=''
  psw=''
  amnt=''

  acnoo=''
  psww=''
  amntt=''

  user=''

  constructor(private ds:DataService){
    // acess login user name
     this.user=this.ds.currentuser
  }

  deposit(){
    var acno=this.acno
    var psw=this.psw
    var amnt=this.amnt

    const result=this.ds.deposit(acno,psw,amnt)

    if(result){
      alert(`${amnt} credited to your ac and balance is ${result}`)
    }
    else{
      alert("incorect acno or password")
    }

  }
  withdraw(){
    var acnoo=this.acnoo
    var psww=this.psww
    var amntt=this.amntt

    const resultt=this.ds.withdraw(acnoo,psww,amntt)

    if(resultt){
      alert(`${amntt} withdrawn from your ac and balance is ${resultt}`)
    }
  }
}
