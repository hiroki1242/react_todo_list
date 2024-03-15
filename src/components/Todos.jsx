export const Todos = (props) => {
  const { todos, toggleIsDone, toggleIsEdit, deleteTodo, onChangeEdit } = props;

  return (
    <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo.id}>
              {!todo.isEdit ? (
                <div className="mt-2">
                  <input type="checkbox" onChange={() => toggleIsDone(index)} id={`checkbox-${todo.id}`} className="mr-2" />
                  <label htmlFor={`checkbox-${todo.id}`}>{todo.text}</label> 
                  <input type="button" onClick={() => toggleIsEdit(index)} className="edt-btn" value="編集"/>
                  <input type="button" value="削除" onClick={() => deleteTodo(index)} className="dlt-btn"/>
                </div>
              ) : (
                <div className="mt-2">
                  <input type="text" onChange={(e) => onChangeEdit(e, index)} value={todo.text} className="input" />
                  <input type="button" onClick={() => toggleIsEdit(index)} className="edt-btn" value="保存"/>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
  )
}