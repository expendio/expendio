import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import Colors from 'styles/colors';
import { Vibrations } from 'helpers';
import { useModalStackActions } from 'components/providers/ModalStackProvider';
import { ModalList } from 'components/experience/ModalStack';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import SvgIcon from 'components/base-components/SvgIcon';
import { Action, StyledTabs } from './styled/tabs';
import Tab from './Tab';

const BottomTabs: FunctionComponent = () => {
  const { pathname } = useLocation();
  const { pushModal } = useModalStackActions();

  const openModal = () => {
    pushModal({ name: ModalList.TRANSACTION });
    Vibrations.buttonTouch();
  };

  return (
    <>
      <StyledTabs>
        <Tab icon={Icons.HOME} to="/" currentPath={pathname} />
        <Tab icon={Icons.COMPASS} to="/transactions" currentPath={pathname} />
        <Action onClick={openModal}>
          <SvgIcon icon={Icons.BOOKMARK_ADD} color={Colors.WHITE} />
        </Action>
        <Tab icon={Icons.WALLET} to="/accounts" currentPath={pathname} />
        <Tab icon={Icons.SETTINGS} to="/settings" currentPath={pathname} />
      </StyledTabs>
    </>
  );
};

export default BottomTabs;
