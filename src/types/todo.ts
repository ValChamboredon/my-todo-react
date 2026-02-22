export type Priority = "Urgente" | "Moyenne" | "Basse";

export interface Todo {
  id: number;
  text: string;
  priority: Priority;
}

export interface TodoCounts {
  total: number;
  urgent: number;
  medium: number;
  low: number;
}