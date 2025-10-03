// src/pages/TodoList.tsx
import { useState, type FormEvent } from 'react';
import { useTodoStore } from '../store/useTodoStore';

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
            <div key={todo.id} style={{ padding: '10px', border: '1px solid #ddd', marginBottom: '10px' }}>
              {todo.text}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;