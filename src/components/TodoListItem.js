import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames'// 조건부 스타일링을 위해 classnames를 사용
import './TodoListItem.scss';

const TodoListItem = ({ todo , onRemove , onToggle}) => {
    const {id, text, checked} = todo;


  return (
    <div className="TodoListItem">
      <div className={cn("checkbox", {checked})} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox/> :<MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
