// 다른 모듈들 통합
import { combineReducers } from 'redux';
import todo from './modules/todo';
import mbti from './modules/mbti';

export default combineReducers({
  todo,
  mbti,
});
