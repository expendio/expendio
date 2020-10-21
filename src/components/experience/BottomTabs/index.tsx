import React, { FunctionComponent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Colors from 'styles/colors';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import SvgIcon from 'components/base-components/SvgIcon';
import { Action, StyledTabs } from './styled/tabs';
import Tab from './Tab';
import Modal from '../Modal';
import TransactionModal from '../../modals/Transaction';

const BottomTabs: FunctionComponent = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <StyledTabs>
        <Tab icon={Icons.HOME} to="/" currentPath={pathname} />
        <Tab icon={Icons.COMPASS} to="/transactions" currentPath={pathname} />
        <Action onClick={openModal}>
          <SvgIcon icon={Icons.BOOKMARK_ADD} color={Colors.WHITE} />
        </Action>
        <Tab icon={Icons.BOOKMARKS} to="/accounts" currentPath={pathname} />
        <Tab icon={Icons.SETTINGS} to="/settings" currentPath={pathname} />
      </StyledTabs>
      <TransactionModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default BottomTabs;
