import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transcation',
  templateUrl: './transcation.component.html',
  styleUrls: ['./transcation.component.css']
})
export class TranscationComponent {
acno:any
transcation:any
  constructor(private ds:DataService){
    this.acno=this.ds.currentacno
    
    this.transcation=this.ds.gettransaction(this.acno)

    console.log(this.transcation);  
  }
}
