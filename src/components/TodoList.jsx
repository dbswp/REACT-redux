import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, done } from '../store/modules/todo';

export default function TodoList() {
  const list = useSelector((state) => state.todo.list);
  const inputRef = useRef();

  const dispatch = useDispatch();

  return (
    <>
      <section>
        <h1>할일 목록</h1>
        <div>
          <input type="text" ref={inputRef} />
          <button
            onClick={() => {
              dispatch(
                create({ id: list.length + 1, text: inputRef.current.value })
              );
              inputRef.current.value = '';
            }}
          >
            추가
          </button>
        </div>
        <ul>
          {list.map((el) => {
            return <li key={el.id}>{el.text}</li>;
          })}
        </ul>
      </section>
    </>
  );
}