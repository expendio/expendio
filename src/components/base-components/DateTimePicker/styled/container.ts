import styled from 'styled-components';
import Colors from 'styles/colors';
import { getMargins, PositionProps } from 'helpers';

export const StyledDateTimePicker = styled.div.attrs((props: PositionProps) => props)`
  ${getMargins};
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
  cursor: default;
`;

export const Label = styled.label.attrs((props: any) => props)`
  margin-left: 16px;
  margin-bottom: 6px;
  transition: all 150ms linear;
  color: ${Colors.DARK};
`;

export const AbsoluteContent = styled.div.attrs((props: any) => props)`
  position: absolute;
  bottom: 4px;
  ${(props) => props.floatRight ? 'right: 8px' : 'left: 8px'};
  display: flex;
  align-items: center;
`;
