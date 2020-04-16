
export class Todo {

    static fromJson({id, task, completed, created}) {
        const tempTodo = new Todo(task);
        tempTodo.id = id; 
        tempTodo.completed = completed; 
        tempTodo.created = created; 

        return tempTodo;
    }

    constructor(todo) {

        this.task = todo;

        this.id = new Date().getTime(); // código numérico
        this.completed = false;
        this.created = new Date();

    }

    printTask() {
        console.log(this.task, this.id);
    }

}