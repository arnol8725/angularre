import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../model/todo.model';
import { store } from '@angular/core/src/render3';
import { FormControl, Validators } from '@angular/forms';
import { TouchSequence } from 'selenium-webdriver';

import { ToggleTodoAction, EditarTodoAction,EliminarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  
 @Input() todo : Todo;
 @ViewChild('txtInputFisico') txtInputFisico: ElementRef;
 editando : boolean;

 chkField : FormControl;
 txtInput : FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
      this.chkField = new FormControl(this.todo.completado);
      this.txtInput = new FormControl(this.todo.texto,Validators.required);
      console.log(this.todo);
      this.chkField.valueChanges.subscribe( valor => {
            console.log(valor);
            const action = new ToggleTodoAction(this.todo.id);
            this.store.dispatch(action);
      });
  }

  editar(){
    if(!this.todo.completado)
      this.editando = !this.editando;  

    setTimeout ( () => {
      this.txtInputFisico.nativeElement.select();
    },1);
    
  }

  terminarEdition(){
    this.editando = !this.editando;  

    console.log('Accion de edition');
    if (this.txtInput.invalid){
        return;
    }
    if (this.txtInput.value === this.todo.texto){
      return;
  }
    if (this.txtInput.value.length > 0){
    const action = new EditarTodoAction(this.todo.id,this.txtInput.value);
    this.store.dispatch(action);
    }

  }
  eliminar(id){
    console.log('Accion Eliminar' + id);
    
        const action = new EliminarTodoAction(this.todo.id);
        this.store.dispatch(action);
    
  }


}
