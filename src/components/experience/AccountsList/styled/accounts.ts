import styled from 'styled-components';
import Colors from 'styles/colors';

const getBackgroundColor = (props) => {
  const { color } = props;

  return color;
};

export const StyledAccount = styled.li.attrs((props: any) => props)`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 8px;
  background-color: ${getBackgroundColor};
`;

export const Name = styled.span`
  font-size: 16px;
  margin-bottom: 12px;
  color: ${Colors.WHITE};
`;

export const Currencies = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Currency = styled.span`
  color: ${Colors.WHITE};
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  font-size: 18px;
  width: 50%;
`;

export const SelectedMark = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: ${Colors.BACKGROUND.LIGHT};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 6px;
  right: 6px;
`;
