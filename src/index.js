import './styles.css';

import { Todo, TodoList } from './classes'; // coge el index.js por defecto
import { createTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// todoList.todos.forEach(todo => createTodoHtml(todo));
todoList.todos.forEach(createTodoHtml); // esto funciona si solo hay un argumento

// localStorage.setItem('my-key', 'ABC1234');
// sessionStorage.setItem('my-session-key', '1234');

