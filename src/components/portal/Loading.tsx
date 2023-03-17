import styled from 'styled-components';
import PortalWrapper from './PortalWrapper';
const Loading = () => {
  return (
    <PortalWrapper wrapperId="react-portal-loading-container">
      <Background>
        <div>주문 내역을 불러오는 중입니다 ... </div>
      </Background>
    </PortalWrapper>
  );
};

const Background = styled.div`
  background-color: #00000085;
  width: 1280px;
   @media (max-width: 1280px) {
    width: 100%;
  }
  height: 100vh;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    color: #fff6f7;
  }
`;
export default Loading;
