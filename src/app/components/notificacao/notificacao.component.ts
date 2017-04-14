import { Component, OnInit } from '@angular/core';

import { Notificacao } from '../../models/notificacao';
import { NotificacaoService} from '../../services/notificacao.service';

@Component({
  selector: 'notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {

  notificacao: Notificacao;
  visivel: boolean  = false;

  constructor(private notificacaoService: NotificacaoService) { }

  ngOnInit() {
    this.notificacaoService.obterNotificacoes().subscribe((notificacao: Notificacao) => {
      this.notificacao = notificacao;
      this.visivel = true;
      setTimeout(() => {
        this.visivel = false;
      }, 2000);
    })
  }

  tipoAlerta() {
    if (this.notificacao.tipo === 'success' || this.notificacao.tipo === 'warning' || 
        this.notificacao.tipo === 'info' || this.notificacao.tipo === 'danger') {
      return `alert-${this.notificacao.tipo}`;
    }
    return 'alert-success';
  }

}
