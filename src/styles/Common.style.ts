import styled from 'styled-components'


export const PageTitle = styled.h1`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSize.header_2};
  color: ${({ theme }) => theme.colors.blackColors.grey_900};
  text-align: center;
`;
export const SubTitle = styled.h3`
  font-weight: 900;
  color: ${({ theme }) => theme.colors.blackColors.grey_900};
  font-size: ${({ theme }) => theme.fontSize.subtitle_1};
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.borderColor};
  background-color: #fff;
`;