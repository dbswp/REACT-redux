import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Board from './components/Board';
import Header from './components/Header';
// 필수로 알아야 됨
import { Link, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      {/* app.js에 헤더 고정 */}
      <Header />
      {/* 경로에 맞는 컴포넌트 보여주기 코드처리 방향은 위에서 아래 */}
      <Routes>
        {/* <Route path="/" element={<Header />}></Route> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Test />} />
        <Route path="/board" element={<Board />} />
        {/* 라우터에 어떤 params값을 받을건지 선언해줘야함 */}
        <Route path="/board/:boardID" element={<BoardDetail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
