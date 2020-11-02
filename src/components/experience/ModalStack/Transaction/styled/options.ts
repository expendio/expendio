import styled from 'styled-components';
import Colors from '../../../../../styles/colors';

export const StyledOptions = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Option = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OptionLabel = styled.span`
  font-size: 16px;
  color: ${Colors.FONT.LIGHT};
  margin-bottom: 8px;
`;

export const OptionValue = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.FONT.DARK};
`;
