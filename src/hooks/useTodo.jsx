import { useState } from "react";

export const useTodo = () => {
  // inputのテキスト、todos配列、Idの最大値保持用のState
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const [maxId, setMaxId] = useState(0);
  // カウント系State
  const [allCount, setAllCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const [undoneCount, setUnDoneCount] = useState(0);

  // 入力のonChange
  const onChange = (e) => {
    setText(e.target.value);
  };

  // 編集入力のonChange
  const onChangeEdit = (e, index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, text: e.target.value}
      }
      return todo;
    });

    setTodos(newTodos);
  };

  // タスクオブジェクトの作成
  const createTodo = (id, text) => ({id, text, isDone: false, isEdit: false})

  // タスクの追加
  const addTodo = () => {
    const todoObj =  createTodo(maxId, text);
    setTodos([...todos, todoObj]);
    // setTodos([...todos, {id: maxId, text, isDone: false, isEdit: false}]);
    setText('');
    setMaxId(maxId + 1);
    setAllCount(prevAllCount => prevAllCount + 1);
    setUnDoneCount(prevUnDoneCount => prevUnDoneCount + 1);
  };

  // タスクの削除
  const deleteTodo = (index) => {
    if (!window.confirm(`${todos[index].text}を本当に削除しますか？`)) return;
    const newTodos = [...todos];
    newTodos[index].isDone ? setDoneCount(prevDoneCount => prevDoneCount - 1) : setUnDoneCount(prevUndoneCount => prevUndoneCount- 1);
    newTodos.splice(index, 1);

    setTodos(newTodos);
    setAllCount(prevAllCount => prevAllCount - 1);
  };

  // isEditのフラグ変更
  const toggleIsEdit = (index) => {
    const newTodos = todos.map((todo, i) => (i === index) ? { ...todo, isEdit: !todo.isEdit } : todo);

    setTodos(newTodos);
  };

  // isDoneのフラグ変更
  const toggleIsDone = (index) => {
    const newTodos = todos.map((todo, i) => i === index ? { ...todo, isDone: !todo.isDone} : todo);
    const newDoneCount = newTodos.filter(todo => todo.isDone).length;
    const newUnDoneCount = newTodos.length - newDoneCount;

    setDoneCount(newDoneCount);
    setUnDoneCount(newUnDoneCount);
    setTodos(newTodos);
  };

  return { text, todos, allCount, doneCount, undoneCount, onChange, onChangeEdit, addTodo, deleteTodo, toggleIsEdit, toggleIsDone }
};