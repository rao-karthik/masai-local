import { createStore } from 'redux';
import { addTodo } from './action';
import { reducer } from './reducer';

export const store = createStore(reducer);