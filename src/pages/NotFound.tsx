import styled from 'styled-components';

const NotFound = () => {
  return <Wrapper>404 not found 페이지를 찾을 수 없습니다.</Wrapper>;
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default NotFound;
