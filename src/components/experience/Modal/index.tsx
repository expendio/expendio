import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { Vibrations } from 'helpers';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import { Header, StyledModal, Title, Body, EmptyBlock } from './styled/modal';

interface Props {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

const Modal: FunctionComponent<Props> = (props) => {
  const { isOpen, title, onClose, children } = props;

  const handleClose = () => {
    Vibrations.buttonTouch();
    onClose();
  };

  if (isOpen) {
    return ReactDOM.createPortal((
      <StyledModal>
        <Header>
          <IconButton
            onClick={handleClose}
            icon={Icons.CHEVRON_LEFT}
            buttonColor="dark"
            style={{ height: '38px', width: '38px' }}
            height={32}
            width={32}
          />
          <Title>{title}</Title>
          <EmptyBlock />
        </Header>
        <Body>
          {children}
        </Body>
      </StyledModal>
    ), document.body);
  }
  return null;
};

export default Modal;
