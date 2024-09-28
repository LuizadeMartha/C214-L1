type Task = {
  name: String;
  schedule: Date;
};

class ToDoListManager {
  private tasks: Task[] = [];
  constructor() {}

  insertTask(task: Task) {
    this.tasks.push(task);
  }
}

const task: Task = {
  name: "aula 3",
  schedule: new Date("23-08-2024"),
};

const taskManager = new ToDoListManager();

taskManager.insertTask(task);
