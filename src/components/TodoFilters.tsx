import { type Priority } from "../types/todo";

type Props = {
  filter: Priority | "Tous";
  setFilter: (f: Priority | "Tous") => void;
  counts: { total: number; urgent: number; medium: number; low: number };
  selectedSize: number;
  onFinish: () => void;
};

export const TodoFilters = ({ filter, setFilter, counts, selectedSize, onFinish }: Props) => {
  const btns: { label: string; val: Priority | "Tous"; c: number }[] = [
    { label: "Tous", val: "Tous", c: counts.total },
    { label: "Urgente", val: "Urgente", c: counts.urgent },
    { label: "Moyenne", val: "Moyenne", c: counts.medium },
    { label: "Basse", val: "Basse", c: counts.low },
  ];

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-wrap gap-2">
        {btns.map(b => (
          <button 
            key={b.val} 
            className={`btn btn-sm btn-soft ${filter === b.val ? "btn-primary" : ""}`}
            onClick={() => setFilter(b.val)}
          >
            {b.label} ({b.c})
          </button>
        ))}
      </div>
      <button className="btn btn-sm btn-primary" disabled={selectedSize === 0} onClick={onFinish}>
        Finir ({selectedSize})
      </button>
    </div>
  );
};