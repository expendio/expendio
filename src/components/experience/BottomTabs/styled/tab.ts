import styled from 'styled-components';
import Colors from 'styles/colors';

const getBackgroundColor = (props) => {
  const { isActive } = props;

  if (isActive) {
    return Colors.ACCENT_SHADE;
  }

  return 'transparent';
};

export const StyledTab = styled.div.attrs((props: any) => props)`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${getBackgroundColor};
`;
