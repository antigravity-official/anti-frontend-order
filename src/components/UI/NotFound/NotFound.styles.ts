import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: ${({ theme }) => theme.color.DARK};
    margin: 0;
    padding: 0 0 10px 0;
    font-weight: 700;
    font-size: 18px;
  }
  button {
    border: 0;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.color.GREY};
    padding: 10px 20px;
    border-radius: 12px;
    margin: 20px 0 0 0;
    transition: all 0.8s;
  }
  button:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.GREY};
  }
`;
