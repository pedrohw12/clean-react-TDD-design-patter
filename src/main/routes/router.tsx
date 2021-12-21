import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApiContext } from '@/presentation/contexts';
import {
  getCurrentAccountAdapter,
  setCurrentAccountAdapter
} from '../adapters/current-account-adapter';
import { PrivateRoute } from '@/presentation/components';
import {
  makeLogin,
  makeSignUp,
  makeSurveyList,
  makeSurveyResult
} from '../factories/pages';

const Router: React.FC = () => {
  return (
    <RecoilRoot>
      <ApiContext.Provider
        value={{
          setCurrentAccount: setCurrentAccountAdapter,
          getCurrentAccount: getCurrentAccountAdapter
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/login" exact component={makeLogin} />
            <Route path="/signup" exact component={makeSignUp} />
            <PrivateRoute path="/" exact component={makeSurveyList} />
            <PrivateRoute path="/surveys/:id" component={makeSurveyResult} />
          </Switch>
        </BrowserRouter>
      </ApiContext.Provider>
    </RecoilRoot>
  );
};

export default Router;
