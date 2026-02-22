import { Trash } from "lucide-react";
import { type Todo } from "../types/todo";

type Props = {
    todo: Todo;
    isSelected: boolean;
    onDelete: () => void;
    onToggle: (id: number) => void;
};

const TodoItem = ({ todo, isSelected, onDelete, onToggle }: Props) => {
    const badgeClass = todo.priority === "Urgente" ? "badge-error" : todo.priority === "Moyenne" ? "badge-warning" : "badge-success";

    return (
        <li className="p-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" checked={isSelected} onChange={() => onToggle(todo.id)} />
                <span className="font-bold">{todo.text}</span>
                <span className={`badge badge-sm badge-soft ${badgeClass}`}>{todo.priority}</span>
            </div>
            <button onClick={onDelete} className="btn btn-sm btn-error btn-soft">
                <Trash className="w-4 h-4" />
            </button>
        </li>
    );
};

export default TodoItem;