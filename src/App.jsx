import { useEffect, useState } from "react";
import { AddTask } from "./components/AddTask";
import { Tasks } from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";
import { Title } from "./components/Title";

export function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  function onAddTaskSubmit(title, description) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title,
        description,
        isComplete: false,
      },
    ]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //CHAMANDO UMA API DE TAREFAS

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     //chamar a API
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );
     
  //     // Pegar os dados que ela retorna
  //     const data = await response.json();
  //     console.log(data);
  //     // Armazenar/persistir esses dados no states
  //      setTasks(data);
  //   }
    
  //   fetchTasks();
  // }, []);

  //função que atualiza o isComplete de uma tarefa
  
  
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //preciso atualizar esta tarefa
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      //não preciso  atualizar esta tarefa
      return task;
    });
    setTasks(newTasks);
  }

  function onTaskDelete(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className="w-full min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
       <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}
