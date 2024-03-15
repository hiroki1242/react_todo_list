import { Input } from './components/Input';
import { TodoStates } from './components/TodoStates';
import { Todos } from './components/Todos';
import { useTodo } from './hooks/useTodo';

const TodoApp = () => {

  const { text, todos, allCount, doneCount, undoneCount, onChange, onChangeEdit, addTodo, deleteTodo, toggleIsEdit, toggleIsDone } = useTodo();
  
  return (
    <div className="flex flex-col items-center min-h-screen gap-4 pt-8">
      <Input 
        onChange={onChange}
        text={text}
        addTodo={addTodo}
      />
      <TodoStates 
        allCount={allCount}
        doneCount={doneCount}
        undoneCount={undoneCount}
      />
      <Todos
        todos={todos}
        toggleIsDone={toggleIsDone}
        toggleIsEdit={toggleIsEdit}
        deleteTodo={deleteTodo}
        onChangeEdit={onChangeEdit}
      />
    </div>
  )
};

export default TodoApp;