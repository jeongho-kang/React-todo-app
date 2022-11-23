import React, {useState, useRef , useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList'

const App = () => {
  const [todos,setTodos] = useState([
    {
      id:1,
      text: '리액트 기초',
      checked: true,
    },
    {
      id:2,
      text: '컴포넌트 스타일링 하기',
      checked: true,
    },
    {
      id:3,
      text:'일정 관리 앱 만들기',
      checked: false,
    } 
  ])

  // 고윳값으로 사용될 id
    // ref를 사용하여 변수 담기
  const nextId = useRef(4)

  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current, // ref를 부여한 요소에 current로 접근
        text,
        checked:false,
      }
      setTodos(todos => todos.concat(todo)) // concat은 추가하는 함수
      nextId.current += 1 // nextId에 1씩 더하기
    },
    [],
  )

  const onRemove = useCallback( // filter 함수에는 조건을 확인해주는 함수를 파라미터로 넣어야함
  // 파라미터로 넣은 함수는 true 또는 false 값을 반환해야 하며 여기서 true를 반환하는 경우에만 새로운 배열에 포함
  // filter 함수를 사용하여 제거 기능을 만든다.
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id))
    },
    [],
  )
    //map 함수는 배열을 전체적으로 새로운 형태로 변환한다 했는데 여기선 왜 map을 사용했는가 ?
  const onToggle = useCallback(
    id => {
      setTodos(todos => todos.map(todo =>
        todo.id ===id ? {...todo, checked: !todo.checked} : todo,),)
        // todo.id와 현재 파라미터 id가 같을 때는 규칙대로 새로운 객체를 생성하지만,
        // id 값이 다를떄는 변화를 주지않고 처음 받아왔던 상태 그대로 반환한다.
        // 그렇기 떄문에 map을 사용하여 만든 배열에서 변화가 필요한 원소만 업데이트 되고 나머지는 그대로 남아있다.
      },
    [],
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert = {onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;


