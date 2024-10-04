export interface Task {
  title: string;
  description: string;
  targetDate: string;
  type: string;
  priority: string;
  subTasks: Task[];
}

export class ToDoList {
  private tasks: Task[] = [];

  add(task: Task): void {
    if (
      !task ||
      !task.title ||
      !task.description ||
      !task.targetDate ||
      !task.type ||
      !task.priority
    ) {
      throw new Error("Invalid task"); // Lança erro se a tarefa for inválida
    }
    this.tasks.push(task);
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
