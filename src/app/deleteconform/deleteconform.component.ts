import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deleteconform',
  templateUrl: './deleteconform.component.html',
  styleUrls: ['./deleteconform.component.css']
})
export class DeleteconformComponent {

  @Input() item:String|undefined

}
