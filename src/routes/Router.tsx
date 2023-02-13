import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Page from '../pages';
import demo from '../pages/demo';

export const router = [
    {
      type: 'public',
      component: Page,
      path: `/main`,
      exact: true,
      restricted: false,
    },
    {
        type: 'public',
        component: demo,
        path: `/demo`,
        exact: true,
        restricted: false,
      }
  ];

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      {router.map((router, index) => (
        <Route exact key={index} path={router.path} component={router.component} />
      ))}
      <Route exact path='/'>
        <Redirect to={process.env.REACT_APP_BASE_PATH ?? '/demo'} />
      </Route>
    </BrowserRouter>
  );
};
