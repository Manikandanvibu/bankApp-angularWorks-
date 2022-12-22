import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconform',
  templateUrl: './deleteconform.component.html',
  styleUrls: ['./deleteconform.component.css']
})
export class DeleteconformComponent {
  // to acees acno from parent
  @Input() item:String|undefined

// Event creation
// @output to share the event to parent the event
  @Output() onCancel=new EventEmitter()


  cancel(){

    this.onCancel.emit()

  }

}
