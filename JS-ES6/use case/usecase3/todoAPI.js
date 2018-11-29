// Model
class Todo {
  constructor(title, date) {
      Todo.nextId++;
      this.id = Todo.nextId; // auto_increment
      this.title = title;
      this.completed = false
      this.date = date
  }
}
Todo.nextId = 0;
// Service
class TodosService {
  constructor() {
    this.TodoList = [];
  }
  addTodo(title) {
    this.TodoList.push(new Todo(title, new Date()));
  }
  editTodo(id, newTitle) {
    let target = this.TodoList.find((obj) => obj.id === id);
    target.title = newTitle;
  }
  completeTodo(id) {
    let target = this.TodoList.find((obj) => obj.id === id);
    target.completed = true;
  }
  completeAll() {
    this.TodoList.forEach((obj) => {
      obj.completed = true;
    })
  }
  deleteTodo(id) {
    let targetId = this.TodoList.findIndex((obj) => obj.id === id);
    this.TodoList.splice(targetId, 1);
  }
  clearCompleted() {
    this.TodoList.forEach((obj) => {
      obj.completed = false;
    })
  }
  viewTodos(filter) {
    return this.TodoList.reduce((acc, curr) => {
      switch (filter) {
        case "completed" :
          if(curr.completed) acc.push(curr);
          break;
        case "not completed" :
          if(!curr.completed) acc.push(curr);
          break;
        default:
          throw new Error("Un supported filter");
      }
      return acc;
    }, [])
  }
}

const service = new TodosService();