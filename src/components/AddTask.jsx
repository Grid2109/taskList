import { useState } from "react";
import { Input } from "./Input";

export function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 shadow bg-slate-200 rounded-md  flex flex-col">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Adicione o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Adicione a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa.");
          }
          setTitle("");
          setDescription("");
          onAddTaskSubmit(title, description);
        }}
        className="bg-slate-500 hover:bg-slate-600 cursor-pointer text-white  rounded-md px-4 py-2"
      >
        Adicionar
      </button>
    </div>
  );
}
