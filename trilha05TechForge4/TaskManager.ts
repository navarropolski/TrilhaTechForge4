abstract class TaskManager {
    protected tasks: Set<string> = new Set();
  
    abstract addTask(task: string): void;
    abstract listTasks(): string[];
  }
  
  class Project extends TaskManager {
    addTask(task: string): void {
      this.tasks.add(`Projeto: ${task}`);
    }
  
    listTasks(): string[] {
      return Array.from(this.tasks);
    }
  }
  
  class DailyTasks extends TaskManager {
    addTask(task: string): void {
      this.tasks.add(`Diária: ${task}`);
    }
  
    listTasks(): string[] {
      return Array.from(this.tasks);
    }
  }
  
  const project = new Project();
  project.addTask("Planejar arquitetura do sistema");
  project.addTask("Configurar banco de dados");
  project.addTask("Criar testes unitários");
  
  const daily = new DailyTasks();
  daily.addTask("Ler notificações");
  daily.addTask("Preparar apresentação");
  daily.addTask("Verificar tarefas pendentes");
  
  console.log("Tarefas do projeto:", project.listTasks());
  console.log("Tarefas diárias:", daily.listTasks());
  
  