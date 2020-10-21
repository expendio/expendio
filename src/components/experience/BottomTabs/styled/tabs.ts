import styled from 'styled-components';
import Colors from '../../../../styles/colors';

export const StyledTabs = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 32px;
  box-sizing: border-box;
  background-color: ${Colors.WHITE};
`;

export const Action = styled.button`
  left: 50%;
  border: none;
  outline: none;
  height: 54px;
  width: 54px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.ACCENT};
`;
