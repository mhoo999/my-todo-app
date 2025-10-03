import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Todo } from '../types/todo';

interface TodoStore {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}