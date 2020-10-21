import styled from 'styled-components';
import Colors from 'styles/colors';

export const Body = styled.div`
  padding: 0 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const AmountBox = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: ${Colors.LIGHT_GRAY};
  border-radius: 12px;
  margin: auto 18px 32px;
`;

export const Amount = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: ${Colors.DARK};
`;

export const RecordButton = styled.button`
  outline: none;
  box-sizing: border-box;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.ACCENT};
  color: ${Colors.WHITE};
  padding: 24px 0;
  font-size: 18px;
`;

export const RecordLabel = styled.span`
  margin-right: 10px;
`;
