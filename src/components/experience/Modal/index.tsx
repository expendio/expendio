import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { Header, StyledModal, Title, Body, EmptyBlock } from './styled/modal';
import IconButton from '../../base-components/IconButton';
import { Icons } from '../../base-components/SvgIcon/Icons';

interface Props {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  // children: (onClose) => ReactNode;
}

const Modal: FunctionComponent<Props> = (props) => {
  const { isOpen, title, onClose, children } = props;

  if (isOpen) {
    return ReactDOM.createPortal((
      <StyledModal>
        <Header>
          <IconButton onClick={onClose} icon={Icons.CHEVRON_LEFT} buttonColor="dark" />
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
