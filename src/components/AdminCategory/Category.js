import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

export default function Category() {
  const location = useLocation();

  return (
    <div>
      <HeaderBox>
        <div>헤더자리</div>
      </HeaderBox>
      {/* 카테고리 박스 */}
      <CategotyBox>
        {getMenu('/adminpost', '게시물 관리', location.pathname)}
        {getMenu('/admintransaction', '거래 관리', location.pathname)}
        {getMenu('/adminmember', '회원 관리', location.pathname)}
      </CategotyBox>
    </div>
  );
}


// 각 메뉴 항목을 생성하는 함수
const getMenu = (path, text, currentPath) => {
  // 현재 경로가 메뉴의 경로를 포함하는지 확인
  const isActive = currentPath.includes(path);

  return (
    // 링크로 이동하며 활성화 여부에 따라 스타일 적용
    <Menu as={Link} to={path} active={isActive.toString()}>
      <Text>{text}</Text>
    </Menu>
  );
};

const HeaderBox = styled.div`
  width: 100%;
  height: 5rem; 
  border: 1px solid blue;

`;

const CategotyBox = styled.div`
  width: 100%;
  height: 88px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #F8F8F8;
  display: flex;
  flex-direction: row;
  gap: 8rem;
`;

const Menu = styled.div`
  width: 410px;
  height: 88px;
  flex-shrink: 0;
  border-radius: 20px;
  background: ${({ active }) => (active === 'true' ? '#F2F2F2' : '#F8F8F8')};
  box-shadow: ${({ active }) => (active === 'true' ? '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' : 'none')};
  cursor: pointer;
  text-decoration: none;
`;
const Text = styled.div`
  color: #000;
  font-family: Noto Sans;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align:center;
  padding-top: 1rem;
`;
