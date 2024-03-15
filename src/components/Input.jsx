export const Input = ({onChange, text, addTodo}) => (
    <div className="flex justify-center items-center gap-2 mt-8 mx-4">
      <input 
        type="text"
        onChange={onChange}
        value={text}
        placeholder='TODOを入力'
        className="input"
      />
      <input
        type="button"
        onClick={addTodo}
        value="登録"
        className="rgst-btn"
      />
    </div>
);
