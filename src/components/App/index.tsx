import React, { FunctionComponent } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AppProviders from 'components/providers';
import ModalStack from 'components/experience/ModalStack';
import BottomTabs from 'components/experience/BottomTabs';
import HomePage from 'components/pages/Home';
import TransactionsPage from 'components/pages/Transactions';
import AccountsPage from 'components/pages/Accounts';
import SettingsPage from 'components/pages/Settings';
import { AppBody, StyledApp } from './styled';

const App: FunctionComponent = () => (
  <BrowserRouter>
    <AppProviders>
      <StyledApp>
        <AppBody>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/transactions" component={TransactionsPage} />
            <Route path="/accounts" component={AccountsPage} />
            <Route path="/settings" component={SettingsPage} />
            <Redirect to="/" />
          </Switch>
        </AppBody>
        <BottomTabs />
      </StyledApp>
      <ModalStack />
    </AppProviders>
  </BrowserRouter>
);

export default App;
