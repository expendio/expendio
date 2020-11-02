import styled from 'styled-components';
import Colors from 'styles/colors';

export const StyledTypeSelector = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const getSelectedStyles = (props) => {
  const { selected } = props;

  if (selected) {
    return `
      border: 1px solid ${Colors.DARK};
      color: ${Colors.WHITE};
      background-color: ${Colors.DARK};
    `;
  }

  return `
    border: 1px solid ${Colors.DARK};
    color: ${Colors.DARK};
    background-color: transparent;
  `;
};

export const TypeButton = styled.button.attrs((props: any) => props)`
  outline: none;
  height: 32px;
  flex: 1;
  font-size: 16px;
  ${getSelectedStyles};

  &:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-right: none;
  }

  &:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-left: none;
  }
`;
