import { ToDoList, Task } from "./ToDoList"; // O nome do arquivo deve ser correto

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
      todoInstance.add(anyTask); // Adiciona uma tarefa válida
      const tasks = todoInstance.getTasks();
      expect(tasks).toEqual([anyTask]); // A lista deve conter a tarefa adicionada
    });

    test("should not add an invalid task", () => {
      const todoInstance = new ToDoList();
      const invalidValue: unknown = {
        invalidField: "invalidValue", // Tarefa inválida
      };

      expect(() => {
        todoInstance.add(invalidValue as Task);
      }).toThrow("Invalid task"); // Espera que um erro com essa mensagem seja lançado

      const tasks = todoInstance.getTasks();
      expect(tasks).toEqual([]); // A lista deve permanecer vazia
    });
  });
});
