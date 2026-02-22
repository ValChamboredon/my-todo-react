import { useState, useEffect } from "react";
import type { Priority, Todo } from "../types/todo";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedTodos, setSelectedTodos] = useState<Set<number>>(new Set());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string, priority: Priority) => {
    const newTodo: Todo = { id: Date.now(), text, priority };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const toggleSelectTodo = (id: number) => {
    const newSelected = new Set(selectedTodos);
    if (newSelected.has(id)) newSelected.delete(id);
    else newSelected.add(id);
    setSelectedTodos(newSelected);
  };

  const finishSelected = () => {
    setTodos(prev => prev.filter(todo => !selectedTodos.has(todo.id)));
    setSelectedTodos(new Set());
  };

  return { todos, selectedTodos, addTodo, deleteTodo, toggleSelectTodo, finishSelected };
};