import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Paris', weight: 5.999, symbol: 'PAR'},
  {position: 2, name: 'Nova Iorque', weight: 6.499, symbol: 'NYC'},
  {position: 3, name: 'Londres', weight: 6.299, symbol: 'LON'},
];


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  panelOpenState = false;
}
