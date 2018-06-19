import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-botao-grande',
  templateUrl: './botao-grande.component.html',
  styleUrls: ['./botao-grande.component.css']
})
export class BotaoGrandeComponent {

  @Input() label;

  constructor() {
    console.log(`BotaoGrandeComponent`);
  }

}
