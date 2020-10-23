import styled from 'styled-components';
import Colors from '../../../../styles/colors';
import { Levels } from '../../../../styles/levels';

export const StyledModal = styled.section`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  z-index: ${Levels.modals};
  background-color: ${Colors.WHITE};
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  margin: 0 0 0 16px;
  color: ${Colors.DARK};
  flex: 1;
  text-align: center;
`;

export const Body = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const EmptyBlock = styled.div`
  height: 32px;
  width: 32px;
  background-color: transparent;
`;
