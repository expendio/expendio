import styled from 'styled-components';
import Colors from 'styles/colors';

export const StyledCurrencyBox = styled.div`
  width: 64px;
  margin-left: 4px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const Currency = styled.span`
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${Colors.DARK};
`;
