import { ToDoList, Task } from "./ToDolist"; // Corrigindo o nome do arquivo

const anyTask: Task = {
  title: "any_title",
  description: "any_description",
  targetDate: "01/01/2025",
  type: "any_type",
  priority: "1",
  subTasks: [],
};

describe("ToDoList", () => {
  describe("Testing add", () => {
    test("should add a new task to the list", () => {
      const todoInstance = new ToDoList();
      todoInstance.add(anyTask);
      const tasks = todoInstance.getTasks();
      expect(tasks).toEqual([anyTask]);
    });

    test("should not add an invalid task", () => {
      const todoInstance = new ToDoList();
      const invalidValue: unknown = {
        invalidField: "invalidValue",
      };

      // Expectativa de que um erro será lançado ao tentar adicionar uma tarefa inválida
      expect(() => {
        todoInstance.add(invalidValue as Task); // Casting para Task
      }).toThrow("Invalid task"); // Espera que um erro com essa mensagem seja lançado

      const tasks = todoInstance.getTasks();
      expect(tasks).toEqual([]); // A lista deve permanecer vazia
    });
  });
});
