import styled from 'styled-components';
import Colors from 'styles/colors';

export const StyledApp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${Colors.BACKGROUND.LIGHT};
`;

export const AppBody = styled.section`
  flex: 1;
  padding: 32px 24px 64px;
  box-sizing: border-box;
`;
