import styled from 'styled-components';
import Colors from 'styles/colors';

export const StyledAccounts = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const HeaderLabel = styled.h2`
  color: ${Colors.DARK};
  margin: 0;
`;
