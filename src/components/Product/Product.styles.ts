import styled from 'styled-components';

export const ProductSection = styled.section`
  border: 1px solid ${({ theme }) => theme.color.GREY};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  padding: 20px;
  h2 {
    margin: 0;
    padding: 0 0 20px 0;
  }
`;
export const ProductWrapper = styled.div`
  display: flex;
`;
export const ProductImageSection = styled.div`
  display: flex;
`;
export const ProductInformation = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 15px;
    margin: 0;
    display: flex;
    width: 50;
    font-weight: 700;
    &:nth-child(2) {
      padding: 5px 0;
    }
    span {
      padding-left: 5px;
      font-weight: 700;
      background-color: ${({ theme }) => theme.color.LIGHTGREY};
    }
  }
`;
