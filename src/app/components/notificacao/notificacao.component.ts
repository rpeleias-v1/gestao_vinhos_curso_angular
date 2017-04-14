import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Notificacao } from '../../models/notificacao';
import { NotificacaoService} from '../../services/notificacao.service';

@Component({
  selector: 'notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css'],
  animations: [
    trigger('visivel', [
      state('visivel', style({
        opacity: 1
      })),
      state('naoVisivel', style({
        opacity: 0
      })),
      transition( 'visivel => naoVisivel', animate('.5s'))
    ])
  ]
})
export class NotificacaoComponent implements OnInit {

  notificacao: Notificacao;
  visivel: string  = 'naoVisivel';

  constructor(private notificacaoService: NotificacaoService) { }

  ngOnInit() {
    this.notificacaoService.obterNotificacoes().subscribe((notificacao: Notificacao) => {
      this.notificacao = notificacao;
      this.visivel = 'visivel';
      setTimeout(() => {
        this.visivel = 'naoVisivel';
      }, 2000);
    })
  }

  tipoAlerta() {
    if (this.notificacao &&  (this.notificacao.tipo === 'success' || this.notificacao.tipo === 'warning' || 
        this.notificacao.tipo === 'info' || this.notificacao.tipo === 'danger')) {
      return `alert-${this.notificacao.tipo}`;
    }
    return 'alert-success';
  }

}
