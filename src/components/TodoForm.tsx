import { useState } from "react";
import { type Priority } from "../types/todo";

export const TodoForm = ({ onAdd }: { onAdd: (text: string, p: Priority) => void }) => {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState<Priority>("Moyenne");

  return (
    <div className="flex gap-4">
      <input 
        className="input w-full" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Ajouter une tâche..." 
      />
      <select className="select" value={priority} onChange={(e) => setPriority(e.target.value as Priority)}>
        <option value="Urgente">Urgente</option>
        <option value="Moyenne">Moyenne</option>
        <option value="Basse">Basse</option>
      </select>
      <button className="btn btn-primary" onClick={() => { onAdd(input, priority); setInput(""); }}>
        Ajouter
      </button>
    </div>
  );
};