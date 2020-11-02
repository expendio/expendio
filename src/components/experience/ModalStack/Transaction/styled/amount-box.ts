import styled from 'styled-components';
import Colors from 'styles/colors';
import { TransactionType } from 'models/transactions';

export const StyledAmountBox = styled.div`
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
      return Colors.FONT.DARK;
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
  color: ${Colors.FONT.DARK};
`;
