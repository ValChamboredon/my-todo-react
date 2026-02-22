import { useState } from "react";
import { useTodos } from "./hooks/useTodos";
import { TodoForm } from "./components/TodoForm.jsx";
import { TodoFilters } from "./components/TodoFilters.tsx";
import TodoItem from "./components/TodoItem";
import { Construction } from "lucide-react";
import { type Priority } from "./types/todo";

export default function App() {
  const { todos, selectedTodos, addTodo, deleteTodo, toggleSelectTodo, finishSelected } = useTodos();
  const [filter, setFilter] = useState<Priority | "Tous">("Tous");

  const filteredTodos = filter === "Tous" ? todos : todos.filter(t => t.priority === filter);

  const counts = {
    total: todos.length,
    urgent: todos.filter(t => t.priority === "Urgente").length,
    medium: todos.filter(t => t.priority === "Moyenne").length,
    low: todos.filter(t => t.priority === "Basse").length,
  };

  return (
    <div className="flex justify-center p-10">
      <div className="w-full max-w-2xl flex flex-col gap-6 bg-base-300 p-6 rounded-2xl shadow-xl">
        <TodoForm onAdd={addTodo} />

        <TodoFilters
          filter={filter}
          setFilter={setFilter}
          counts={counts}
          selectedSize={selectedTodos.size}
          onFinish={finishSelected}
        />

        <div className="bg-base-100 rounded-xl overflow-hidden">
          {filteredTodos.length > 0 ? (
            <ul className="divide-y divide-base-300">
              {filteredTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  isSelected={selectedTodos.has(todo.id)}
                  onDelete={() => deleteTodo(todo.id)}
                  onToggle={toggleSelectTodo}
                />
              ))}
            </ul>
          ) : (
            <div className="p-10 flex flex-col items-center opacity-50">
              <Construction className="w-20 h-20 mb-2" />
              <p>Rien à signaler ici !</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}