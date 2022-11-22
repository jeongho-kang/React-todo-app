import React from 'react'
import TodoListItem from './TodoListItem'
import './TodoList.scss'

// props로 받아온 todos 배열을 배열 내장 함수 map을 통해 
// TodoListItem으로 이루어진 배열로 변환하여 렌더링 함.
const TodoList = ({todos,onRemove , onToggle}) => {
    return (
        <div className='TodoList'>
            {todos.map(todo => ( // map을 사용할떄는 key props를 전달해 주어야한다.
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
                // 여기서 key는 각 항목마다 가지고 있는 고윳값 id를 넣어줬다.
                // todo 데이터는 통쨰로 props로 전달한다 (여러 종류 값을 전달해야 하는 경우에는 객체 통쨰로 전달하는것이 나중에 성능 최적화 할때 편리하다.)
            ))}
            
        </div>
    )
}

export default TodoList;