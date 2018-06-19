import {Component} from '@angular/core';

class Cliente {
  nome: string;
  email: string;
  profissao: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cliente = new Cliente();
  funcionarios = [];
  profissoes = ['Programador', 'Engenheiro', 'Médico', 'Dentista'];

  aoAdicionar(funcionario) {
    console.log(funcionario);
    this.funcionarios.push(funcionario);
  }

  salvar(form: any) {
    /* this.cliente.nome = form.value.nome;
     this.cliente.email = form.value.email;
     this.cliente.profissao = form.value.profissao;*/
    console.log(form.value);
    form.reset({profissao: ''});
    console.log(this.cliente);
  }
}
