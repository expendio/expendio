import React, { FunctionComponent, useState } from 'react';
import { addDays } from 'date-fns';
import { TransactionModel } from 'models/transactions';
import { useModalStackActions } from 'components/providers/ModalStackProvider';
import { Field, Form } from 'components/base-components/Form';
import DateTimePicker from 'components/base-components/DateTimePicker';
import Modal from 'components/experience/Modal';
import { Body } from './styled/modal';

interface Props {
  transaction: TransactionModel;
  onSubmit: (transaction) => void;
}

const TransactionDetailsModal: FunctionComponent<Props> = (props) => {
  const { transaction } = props;
  const [details, setDetails] = useState(transaction);
  const { popModal } = useModalStackActions();

  return (
    <Modal isOpen title="Details" onClose={popModal}>
      <Body>
        <Form value={details} onChange={setDetails}>
          <Field name="label" label="Label" mB showClear />
          <Field
            name="date"
            label="Date"
            type="date-time"
            component={DateTimePicker}
            showClear
            mB
          />
          <Field name="note" label="Note" mB showClear />
        </Form>
      </Body>
    </Modal>
  );
};

export default TransactionDetailsModal;
