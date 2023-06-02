import styled from 'styled-components';

export const NavigationSection = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.color.WHITE};
  position: fixed;
  top: 0;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.DARK};
    padding: 0px 10px;
  }
  a:hover {
    color: ${({ theme }) => theme.color.DARKGREY};
    cursor: pointer;
  }
`;

export const NavigationLogo = styled.div`
  padding-left: 30px;
`;

export const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    li {
      display: flex;
      height: 40px;
      min-width: 71px;
      padding: 0 18px;
      align-items: center;
    }
  }
`;
