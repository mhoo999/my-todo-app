// src/pages/TodoList.tsx
import { useState, type FormEvent } from 'react';
import { useTodoStore } from '../store/useTodoStore';
import TodoItem from '../components/TodoItem';  // 추가

function TodoList() {
  const [input, setInput] = useState<string>('');
  const { todos, addTodo } = useTodoStore();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Todo 목록</h1>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일 입력..."
          style={{ padding: '10px', width: '70%' }}
        />
        <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>
          추가
        </button>
      </form>

      <div>
        {todos.length === 0 ? (
          <p>할 일이 없습니다.</p>
        ) : (
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;