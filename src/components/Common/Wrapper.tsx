import styled from "@emotion/styled";
import { ReactNode } from "react";

interface prop {
  children: ReactNode;
}

export default function Wrapper({ children }: prop) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  margin: 12px;
  border-radius: 8px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;
