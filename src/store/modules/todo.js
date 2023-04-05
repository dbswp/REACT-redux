const initState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추 펴기',
      done: false,
    },
    {
      id: 3,
      text: '프로젝트 잘 마무리하기',
      done: false,
    },
  ],
};

// 액션 타입 정하기
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

export function create(playload) {
  return {
    type: CREATE,
    playload,
  };
}
export function done(id) {
  return {
    type: DONE,
    id,
  };
}

export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          id: action.playload.id,
          text: action.playload.text,
          done: false,
        }),
        nextID: action.playload.id + 1,
      };
    case DONE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
