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
      id: 2,
      text: '프로젝트 잘 마무리하기',
      done: false,
    },
  ],
  buyList: ['닌텐도', '자동차'],
  todoListCount: 3,
};

let counts = initState.list.length;
initState['nextID'] = counts;

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
        // list: state.list.concat({
        //   id: action.playload.id,
        //   text: action.playload.text,
        //   done: false,
        // }),
        list: [
          ...state.list,
          {
            id: action.playload.id,
            text: action.playload.text,
            done: false,
          },
        ],
        nextID: action.playload.id + 1,
      };
    case DONE:
      return {
        ...state,
        // 맵함수는 무조거너 ,return으로 받아야 배열로 반환됨
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
