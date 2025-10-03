// src/store/useTodoStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Todo } from '../types/todo';

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      
      addTodo: (text) => set((state) => ({
        todos: [...state.todos, {
          id: Date.now(),
          text,
          completed: false,
        }]
      })),
      
      toggleTodo: (id) => set((state) => ({
        todos: state.todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      })),
      
      deleteTodo: (id) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
      })),
    }),
    { name: 'todo-storage' }
  )
);