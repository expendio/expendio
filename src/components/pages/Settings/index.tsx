import React, { FunctionComponent } from 'react';
import { StyledSettings, Header, SubMenu, SubTitle } from './styled/page';
import SvgIcon, { Icons } from '../../base-components/SvgIcon';
import Colors from '../../../styles/colors';

const SettingsPage: FunctionComponent = () => (
  <StyledSettings>
    <Header>Settings</Header>
    <SubMenu>
      <SubTitle>Currencies</SubTitle>
      <SvgIcon icon={Icons.CHEVRON_RIGHT} color={Colors.DARK} />
    </SubMenu>
    <SubMenu>
      <SubTitle>Categories</SubTitle>
      <SvgIcon icon={Icons.CHEVRON_RIGHT} color={Colors.DARK} />
    </SubMenu>
  </StyledSettings>
);

export default SettingsPage;
