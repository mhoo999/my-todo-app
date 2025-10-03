import type { Todo } from '../types/todo';
import { useTodoStore } from '../store/useTodoStore';

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo } = useTodoStore();

  return (
    <div style={{ 
      padding: '10px', 
      border: '1px solid #ddd', 
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none' 
        }}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </div>
  );
}

export default TodoItem;