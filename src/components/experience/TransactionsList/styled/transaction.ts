import styled from 'styled-components';
import { getShade } from 'helpers';
import Colors from 'styles/colors';
import { TransactionType } from '../../../../models/transactions';

const getTransactionColor = (props) => {
  const { isIncome } = props;

  return isIncome ? Colors.SUCCESS_SHADE : Colors.LIGHT_GRAY;
};

export const StyledTransaction = styled.div.attrs((props: any) => props)`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 6px;
  background-color: ${getTransactionColor};
  margin-bottom: 16px;
`;

const getBackgroundColor = (props) => {
  const { color } = props;

  return getShade(color || Colors.BRAND);
};

export const Category = styled.div.attrs((props: any) => props)`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${getBackgroundColor};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 8px;
  flex: 1;
`;

export const Label = styled.span`
  color: ${Colors.DARK};
  font-size: 16px;
  margin-bottom: 4px;
`;

export const DateLabel = styled.span`
  color: ${Colors.GRAY};
  font-size: 14px;
`;

const getSignColor = (props) => {
  const { type } = props;

  if (type === TransactionType.Expense) {
    return Colors.ERROR;
  }
  return Colors.SUCCESS;
};

export const Sign = styled.span.attrs((props: any) => props)`
  font-size: 16px;
  color: ${getSignColor};
  margin-right: 4px;
  font-weight: bold;
`;

export const Amount = styled.span`
  color: ${Colors.DARK};
  font-size: 16px;
  font-weight: bold;
`;
