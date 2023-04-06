import React from 'react';
import './App.css';
import Start from './pages/Start';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import { useSelector } from 'react-redux';
import Mbti from './pages/Mbti';
import Show from './pages/Show';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);
  const survey = useSelector((state) => state.mbti.survey);

  return (
    <>
      <GlobalStyle />
      <Main>
        {page === 0 ? (
          <Start />
        ) : page !== survey.length + 1 ? (
          <Mbti />
        ) : (
          <Show />
        )}
      </Main>
    </>
  );
}

export default App;

// Routes 경로들
// {/* app.js에 헤더 고정 */}
// {/* <Header /> */}
// <ListContainer />
// {/* 경로에 맞는 컴포넌트 보여주기 코드처리 방향은 위에서 아래 */}
// <Routes>
//   {/* <Route path="/" element={<Header />}></Route> */}
//   <Route path="/profile" element={<Profile />} />
//   <Route path="/test" element={<Test />} />
//   <Route path="/board" element={<Board />} />
//   {/* 라우터에 어떤 params값을 받을건지 선언해줘야함 */}
//   <Route path="/board/:boardID" element={<BoardDetail />}></Route>
//   {/* <Route path="*" element={<NotFound />}></Route> */}
// </Routes>
