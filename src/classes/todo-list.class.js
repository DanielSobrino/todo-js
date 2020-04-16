import { Todo } from "./todo.class";
import { todoCount } from "../js/componentes";

export class TodoList {

    constructor() {
        this.loadLocalStorage();
    }

    newTodo(todo) {
        this.todos.push(todo);
        this.saveToLocalStorage();
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.saveToLocalStorage();
    }

    toggleComplete(id) {
        for(const todo of this.todos) {
            if(todo.id == id) {
                todo.completed = !todo.completed;
                 this.saveToLocalStorage();
                break;
            }
        }
    }

    removeCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
        this.pendingCount();
    }

    loadLocalStorage() {
        this.todos = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
        // this.todos = this.todos.map(obj => Todo.fromJson(obj));
        this.todos = this.todos.map(Todo.fromJson);
        this.pendingCount();
    }

    pendingCount() {
        let pending = 0;
        let countBox = todoCount.firstElementChild;
        for (let task of this.todos) {
            task.completed ? null : pending++;
        }
        countBox.innerHTML = pending;
    }

}