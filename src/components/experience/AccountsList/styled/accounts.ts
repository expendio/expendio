import styled from 'styled-components';
import Colors from 'styles/colors';

const getBackgroundColor = (props) => {
  const { color } = props;

  return color;
};

export const StyledAccount = styled.div.attrs((props: any) => props)`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 8px;
  background-color: ${getBackgroundColor};
`;

export const Name = styled.span`
  font-size: 16px;
  margin-bottom: 8px;
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
