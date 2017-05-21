import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent {

  constructor() { }

  @Input() titulo: string;
  @Output() acaoVoltar: EventEmitter<any>  = new EventEmitter<any>();

  voltar() {
    this.acaoVoltar.next();
  }
 
}
