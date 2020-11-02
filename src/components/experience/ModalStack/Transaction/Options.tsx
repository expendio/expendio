import React, { FunctionComponent } from 'react';
import { TransactionType } from 'models/transactions';
import { useModalStackActions } from 'components/providers/ModalStackProvider';
import RenderIf from 'components/base-components/RenderIf';
import { ModalList } from 'components/experience/ModalStack';
import { Option, OptionLabel, OptionValue, StyledOptions } from './styled/options';
import { AccountModel } from '../../../../models/accounts';
import { Vibrations } from '../../../../helpers';

interface Props {
  type: TransactionType;
  source: AccountModel;
  onSourceChange: (nextSource: AccountModel) => void;
}

const Options: FunctionComponent<Props> = (props) => {
  const { type, source, onSourceChange } = props;
  const { pushModal } = useModalStackActions();

  const openAccountSelectModal = () => {
    Vibrations.buttonTouch();
    pushModal({
      name: ModalList.SELECT_ACCOUNTS,
      props: {
        selectedAccount: source,
        onSelect: onSourceChange,
      },
    });
  };

  return (
    <StyledOptions>
      <Option onClick={openAccountSelectModal}>
        <OptionLabel>Account</OptionLabel>
        <OptionValue>{source.name}</OptionValue>
      </Option>
      <RenderIf condition={type !== TransactionType.Transfer}>
        <Option>
          <OptionLabel>Category</OptionLabel>
          <OptionValue>Clothes</OptionValue>
        </Option>
      </RenderIf>
      <RenderIf condition={type === TransactionType.Transfer}>
        <Option>
          <OptionLabel>Account</OptionLabel>
          <OptionValue>Wallet</OptionValue>
        </Option>
      </RenderIf>
    </StyledOptions>
  );
};

export default Options;
