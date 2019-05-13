import { Component, OnInit } from '@angular/core';
import { TOGGLEALLTodoAction } from './todo.actions';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {


  bandera : boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  
    
  }

  toggleAll(){
      this.bandera = !this.bandera;
      const action = new TOGGLEALLTodoAction(this.bandera);
      this.store.dispatch(action);
  }
  
}
