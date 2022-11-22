import React, {useState, useCallback} from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('')

  // 컴포넌트가 리렌더링 될 때마다 함수를 새로 만드는것이 아니라
  // 한번 함수를 만들고 재사용 할 수 있게 useCallback 함수를 사용
  const onChange = useCallback(e => {
    setValue(e.target.value)
  }, [])

  const onSubmit = useCallback( // props으로 받아온 onInsert 함수에 현재 value 값을 파라미터로 넣어서 호출하고
  // value 값을 초기화 한다.
    e => {
      onInsert(value)
      setValue('') // value 값 초기화
    // submit 이벤트는 브라우저를 새로고침을 발생시킨다.
    // 이를 방지하기 위해 e.preventDefault()를 호출한다.
    e.preventDefault()
    },
    [onInsert, value],
  )
    


  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" 
      value = {value}
      onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;

