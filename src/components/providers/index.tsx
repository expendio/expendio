import React, { FunctionComponent } from 'react';
import ModalStackProvider from './ModalStackProvider';

const AppProviders: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <ModalStackProvider>
      {children}
    </ModalStackProvider>
  );
};

export default AppProviders;
