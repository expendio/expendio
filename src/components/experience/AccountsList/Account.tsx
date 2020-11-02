import React, { FunctionComponent, useMemo } from 'react';
import { Currencies, Currency, Name, SelectedMark, StyledAccount } from './styled/accounts';
import RenderIf from '../../base-components/RenderIf';
import SvgIcon, { Icons } from '../../base-components/SvgIcon';
import Colors from 'styles/colors';

interface Props {
  name: string;
  color: string;
  balance: { name: string; amount: number }[];
  isSelected?: boolean;
  onClick: () => void;
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const Account: FunctionComponent<Props> = (props) => {
  const { name, balance, color, isSelected, onClick } = props;
  const currencies = useMemo(() => balance.map(
    (c) => (
      <Currency key={c.name}>
        {`${c.name}: ${currencyFormatter.format(c.amount)}`}
      </Currency>
    ),
  ), [balance]);

  return (
    <StyledAccount color={color} onClick={onClick}>
      <Name>{name}</Name>
      <Currencies>{currencies}</Currencies>
      <RenderIf condition={isSelected}>
        <SelectedMark>
          <SvgIcon
            icon={Icons.SUCCESS}
            color={Colors.SUCCESS}
            secondaryColor={Colors.DARK}
            size="small"
          />
        </SelectedMark>
      </RenderIf>
    </StyledAccount>
  );
};

export default Account;
