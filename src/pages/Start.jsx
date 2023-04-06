import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OrangeButton from '../components/OrangeButton';
import { useDispatch } from 'react-redux';
import { next, init } from '../store/modules/mbti';

const Header = styled.p`
  font-size: 3em;
`;
const MainImg = styled.img`
  width: 500px;
`;
const SubHeader = styled.p`
  font-size: 1.5em;
  color: #777;
`;

export default function Start() {
  const [counts, setCounts] = useState(0);
  const dispatch = useDispatch();

  const fetchData = async (req, res) => {
    // mbti 데이터 받아오기
    const resMbtiData = await fetch('http://localhost:4000/data/getdata');
    if (resMbtiData.status === 200) {
      const mbtiData = await resMbtiData.json();
      console.log(mbtiData[0]);
      if (mbtiData[0]) dispatch(init(mbtiData[0]));
    } else {
      console.log(await resMbtiData.json());
    }

    // 방문자수 받아오기
    const resMbtiCount = await fetch('http://localhost:4000/data/getcount');
    if (resMbtiCount.status === 200) {
      const mbtiCount = await resMbtiCount.json();
      setCounts((cur) => mbtiCount.counts);
      console.log(mbtiCount);
    } else {
      console.log(await resMbtiCount.json());
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/img.jpg" alt="메인 이미지" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아 봅시다.!{'\n\n'}
        {counts} 명이 방문했습니다.
      </SubHeader>
      <OrangeButton text="테스트 시작" clickEvent={() => dispatch(next())} />
    </>
  );
}
