import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent{

  @Input('obj') funcionario: any;


  getEstilosCartao(){
    return {
        'border-width': this.funcionario.id + 'px',
        backgroundColor: this.funcionario.id % 2 == 0 ? 'lightblue' : 'lightgreen'
    };
  }
/*
  getClassCss(){
    return ['badge', 'badge-default'];
  }
  */
  isAdmin(){
   return this.funcionario.nome.startsWith('T');
  }
}
