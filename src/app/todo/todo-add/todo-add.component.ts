import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

import * as fromtodo from '../todo.actions';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInpunt : FormControl; 

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.txtInpunt = new FormControl('', Validators.required);
  }
  agregarTodo(){
         console.log( this.txtInpunt.value);
         console.log( this.txtInpunt.valid);
         if (this.txtInpunt.invalid){
           return ;
         }
           const accion = new fromtodo.AgregarTodoAction(this.txtInpunt.value);
           this.store.dispatch(accion);
           this.txtInpunt.setValue('');
         
  }



}
