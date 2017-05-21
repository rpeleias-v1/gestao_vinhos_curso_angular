import { Component, OnInit, Input } from '@angular/core';

import { Vinho } from '../../models/vinho';

@Component({
  selector: 'detalhamento-vinho',
  templateUrl: './detalhamento-vinho.component.html',
  styleUrls: ['./detalhamento-vinho.component.css']
})
export class DetalhamentoVinhoComponent implements OnInit {

  @Input() vinho: Vinho;

  constructor() { }

  ngOnInit() {
  }

}
