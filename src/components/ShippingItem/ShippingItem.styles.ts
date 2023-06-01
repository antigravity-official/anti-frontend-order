import styled from 'styled-components';

export const ShippingItemSection = styled.section`
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.GREY};
`;
export const ShippingItemWrapper = styled.div`
  h2 {
    margin: 0;
    padding: 20px 0 5px 0;
  }
  p {
    span {
      font-weight: 700;
      background-color: ${({ theme }) => theme.color.LIGHTGREY};
    }
    margin: 0;
    padding: 5px 0 0 0;
    font-size: 15px;
    color: ${({ theme }) => theme.color.DARK};
    &:last-child {
      padding-bottom: 12px;
    }
  }
`;
