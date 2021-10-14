import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1``;
const P = styled.p`
  font-size: 18px;
  margin-left: 75px;
`;

const Header = ({ totalCount, completedCount }) => (
  <StyledHeader>
    <H1>TodoApp</H1>
    <P>
      {completedCount}/{totalCount}
    </P>
  </StyledHeader>
);

export default Header;
