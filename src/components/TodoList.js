import React, { useCallback } from 'react'
import TodoListItem from './TodoListItem'
import './TodoList.scss'
import { List } from 'react-virtualized'

const TodoList = ({ todos, onRemove, onToggle}) => {
    const rowRenderer = useCallback(
        ({ index, key, style}) => {
            const todo = todos[index]
            return(
                <TodoListItem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style} />
            )
        },
        [onRemove,onToggle,todos],
    )
    return (
        <List
        className='TodoList'
        width={512} // 전체크기
        height={513} // 전체높이
        rowCount={todos.length} // 항목개수
        rowHeight={57} // 항목 높이
        rowRenderer={rowRenderer} // 항목을 렌더링 할 때 쓰는 함수
        list={todos} // 배열
        style={{ outline : 'none'}} />// List에 기본으로 적용되는 outline 스타일 제거
    )
}



export default React.memo(TodoList);






// props로 받아온 todos 배열을 배열 내장 함수 map을 통해 
// TodoListItem으로 이루어진 배열로 변환하여 렌더링 함.
/* const TodoList = ({todos,onRemove , onToggle}) => {
    return (
        <div className='TodoList'>
            {todos.map(todo => ( // map을 사용할떄는 key props를 전달해 주어야한다.
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
                // 여기서 key는 각 항목마다 가지고 있는 고윳값 id를 넣어줬다.
                // todo 데이터는 통쨰로 props로 전달한다 (여러 종류 값을 전달해야 하는 경우에는 객체 통쨰로 전달하는것이 나중에 성능 최적화 할때 편리하다.)
            ))}
            
        </div>
    )
} */