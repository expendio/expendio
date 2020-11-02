import styled from 'styled-components';
import Colors from 'styles/colors';

export const Body = styled.div`
  padding: 0 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Actions = styled.div`
  display: flex;
  align-items: stretch;
  position: relative;
`;

export const RecordButton = styled.button`
  outline: none;
  box-sizing: border-box;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.BRAND};
  color: ${Colors.WHITE};
  padding: 24px 0;
  font-size: 18px;
  flex: 1;

  & > span {
    margin-right: 10px;
  }
`;

export const DetailsButton = styled.button`
  outline: none;
  box-sizing: border-box;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.BRAND};
  padding: 24px 0;
  width: 86px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
`;
