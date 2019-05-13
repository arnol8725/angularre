import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo  from './todo/todo.reducer';
import * as fromfiltro  from './filter/filter.reducer';
import * as fromfiltroActions from './filter/filter.actions';


export interface AppState {
    todos: Todo[];
    filtro: fromfiltroActions.filtrosValidos;
    
}

export const appReducers: ActionReducerMap<AppState> = {
    todos : fromTodo.todoReducer,
    filtro : fromfiltro.filtroReducer

};