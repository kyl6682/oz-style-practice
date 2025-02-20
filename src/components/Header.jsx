import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: black;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    li {
      list-style: none;
      font-weight: 400;
      font-size: 13px;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>OZ코딩스쿨</h1>
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </HeaderContainer>
  );
}
