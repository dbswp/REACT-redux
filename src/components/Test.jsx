import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Test() {
  const weight = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1>당신의 몸무게는 {weight}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'up' });
        }}
      >
        살찌우기
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'down' });
        }}
      >
        살빼기
      </button>
    </>
  );
}
