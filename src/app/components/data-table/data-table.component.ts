import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Vinho } from '../../models/vinho';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() vinhos: Array<Vinho> = [];
  @Output() selecionarVinho: EventEmitter<Vinho> = new EventEmitter<Vinho>();
  campoBusca: string;

  constructor() { }

  ngOnInit() {
  }

  selecionar(event: any) {
    this.selecionarVinho.emit(event);
  }

}
