export const TodoStates = ({allCount, doneCount, undoneCount}) => (
      <div>
        <p>{`全て: ${allCount} 完了: ${doneCount} 未完了: ${undoneCount}`}</p>
      </div>
);
