import { Component, OnInit } from '@angular/core';
import * as fromFiltros  from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltros.filtrosValidos [] = ['todos','completados','pendientes'];

  constructor() { }

  ngOnInit() {

  }

}
