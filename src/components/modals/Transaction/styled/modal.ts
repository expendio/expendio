import styled from 'styled-components';
import Colors from 'styles/colors';
import { TransactionType } from 'models/transactions';

export const Body = styled.div`
  padding: 0 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const TypeSelector = styled.div`
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

export const Options = styled.div`
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
  margin-bottom: 8px;
`;

export const OptionValue = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const AmountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px;
  background-color: ${Colors.LIGHT_GRAY};
  border-radius: 12px;
  margin: 0 18px 32px;
`;

const getColor = (props) => {
  const { type } = props;

  switch (type as TransactionType) {
    case TransactionType.Transfer:
      return Colors.DARK;
    case TransactionType.Income:
      return Colors.SUCCESS;
    case TransactionType.Expense:
      return Colors.ERROR;
    default:
      return Colors.DARK;
  }
};

export const Sign = styled.span.attrs((props: any) => props)`
  font-size: 28px;
  font-weight: bold;
  margin-right: auto;
  color: ${getColor};
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
