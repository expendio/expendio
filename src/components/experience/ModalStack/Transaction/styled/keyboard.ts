import styled from 'styled-components';
import Colors from 'styles/colors';

export const StyledKeyboard = styled.div`
  background-color: ${Colors.DARK};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
`;

export const KeySpace = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
  box-sizing: border-box;
  width: 100%;
`;

export const Key = styled.td`
    padding: 12px;
    box-sizing: border-box;
    text-align: center;
    height: 48px;
    min-height: 48px;
`;

export const KeyButton = styled.button.attrs((props: any) => props)`
  outline: none;
  background-color: ${Colors.BACKGROUND.SHADE};
  border-radius: 48px;
  font-size: 20px;
  font-weight: bold;
  line-height: 36px;
  height: 52px;
  min-height: 52px;
  width: 52px;
  min-width: 52px;
  box-sizing: border-box;
  color: ${Colors.WHITE};
  overflow: visible;
  text-transform: none;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  &:active {
    background-color: ${Colors.ACCENT};
  }
`;
