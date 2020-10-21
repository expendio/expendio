import styled from 'styled-components';
import Colors from '../../../../styles/colors';

export const StyledSettings = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h2`
  color: ${Colors.DARK};
  margin-top: 0;
  margin-bottom: 24px;
`;

export const SubMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 6px;
  justify-content: space-between;
  margin-bottom: 8px;
  border-radius: 6px;
  background-color: ${Colors.LIGHT_GRAY};
`;

export const SubTitle = styled.h1`
  color: ${Colors.DARK};
  margin: 0;
`;
