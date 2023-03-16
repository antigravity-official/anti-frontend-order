import styled from 'styled-components';

const AppLayout = (props: { children: React.ReactNode }) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  max-width: 1280px;
  @media (max-width:1280px){
    padding:0 1rem;
  }
  margin: 0 auto;
`;
export default AppLayout;
