import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Colors from 'styles/colors';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { StyledTab } from './styled/tab';
import { Vibrations } from '../../../helpers';

interface Props {
  to: string;
  currentPath: string;
  icon: Icons;
}

const Tab: FunctionComponent<Props> = (props) => {
  const { icon, to, currentPath } = props;
  const isActive = to === currentPath;

  return (
    <Link to={to}>
      <StyledTab onClick={Vibrations.buttonTouch} isActive={isActive}>
        <SvgIcon icon={icon} color={isActive ? Colors.ACCENT : Colors.DARK} />
      </StyledTab>
    </Link>
  );
};

export default Tab;
