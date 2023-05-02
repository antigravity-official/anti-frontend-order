import styled from "@emotion/styled";
import { HTMLAttributes, ReactNode } from "react";

interface IWrapperProp
  extends React.DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  props?: any;
}

export default function Wrapper({ children, ...rest }: IWrapperProp) {
  return <Container {...rest}>{children}</Container>;
}

const Container = styled.div`
  margin: 12px;
  border-radius: 8px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;
