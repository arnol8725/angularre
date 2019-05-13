import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Hola');
const todo2 = new Todo('mundo');
todo2.completado=true;
const todo3 = new Todo('!!!!!!!!!');
const estadoInicial : Todo[] = [];
estadoInicial.push(todo1,todo2,todo3);

export function todoReducer (state = estadoInicial ,action:fromTodo.Acciones) : Todo[]{
    switch(action.type){
        case fromTodo.ActionTypes.Agregar_Todo:
        const  todo = new Todo(action.texto);
          /*Se [...state,todo] lo que hace es clonar el arreglo y ,todo lo agregar */
           return [...state,todo];

        case fromTodo.ActionTypes.TOGGLE_Todo:
           
             /*Se [...state,todo] lo que hace es clonar el arreglo y ,todo lo agregar */
              return state.map( todoEdit => {
                        if( todoEdit.id === action.id){
                                return {
                                    ...todoEdit,
                                    completado: !todoEdit.completado
                                };
                        }else{
                            return todoEdit;
                        }
              });
        case fromTodo.ActionTypes.EDITAR_Todo:
           
              /*Se [...state,todo] lo que hace es clonar el arreglo y ,todo lo agregar */
               return state.map( todoEdit => {
                         if( todoEdit.id === action.id){
                                 return {
                                     ...todoEdit,
                                     texto: action.texto
                                 };
                         }else{
                             return todoEdit;
                         }
               });
        case fromTodo.ActionTypes.DELETE_Todo:
           
               /*Se [...state,todo] lo que hace es clonar el arreglo y ,todo lo agregar */
                return state.filter( todoEdit => todoEdit.id !== action.id);
        case fromTodo.ActionTypes.TOGGLE_ALL_Todo:
           
                /*Se [...state,todo] lo que hace es clonar el arreglo y ,todo lo agregar */
                 return state.map( todoEdit => {
                   
                                   return {
                                       ...todoEdit,
                                       completado: action.state
                                   };
                    
                          
                 });
        default:
            return state;   
    }       
}