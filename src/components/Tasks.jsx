import { CheckIcon, ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <>
      {tasks.map((task) => (
        <ul
          key={task.id}
          className="space-y-4 p-6 shadow bg-slate-200 rounded-md"
        >
          <li className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 w-full text-left text-white p-2 rounded-md flex items-center gap-2 ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.isCompleted && <CheckIcon />}
              {task.title}
            </button>
            <Button onClick={() => onSeeDetailsClick(task)}>
              <ChevronRightIcon />
            </Button>
            <Button onClick={() => onTaskDelete(task.id)}>
              <Trash2 />
            </Button>
          </li>
        </ul>
      ))}
    </>
  );
}
