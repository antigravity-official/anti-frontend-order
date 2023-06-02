import styled from 'styled-components';

export const OrdersSection = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.color.GREY};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  h1 {
    font-size: 36px;
    margin: 0;
    padding: 0 0 10px 0;
    text-align: center;
  }
`;
export const OrdersWrap = styled.div`
width: 100%;
}

`;
export const OrdersInformation = styled.div`
  text-align: left;
  h2 {
    margin: 0;
    padding: 0 0 5px 0;
    font-size: 23px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.DARK};
  }
  p {
    margin: 0;
    padding: 5px 0 0 0;
    font-size: 15px;
    color: ${({ theme }) => theme.color.DARK};
    &:last-child {
      padding-bottom: 23px;
    }
    span {
      font-weight: 600;
    }
  }
`;
export const Orders_shippingsInformation = styled.div`
  border: 1px solid ${({ theme }) => theme.color.GREY};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  padding: 0px 20px;
  text-align: left;
`;
