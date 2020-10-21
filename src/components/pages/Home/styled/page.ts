import styled from 'styled-components';
import Colors from '../../../../styles/colors';

export const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 24px;

  &:first-child {
  margin-top: 0;
  }
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderLabel = styled.h2`
  color: ${Colors.DARK};
  margin-top: 0;
  margin-bottom: 4px;
`;
