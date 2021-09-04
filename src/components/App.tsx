import React from 'react';
import { AuthService } from '../services/auth.service';
import Layout1 from './layout/Layout1/Layout1';
import Routes from './layout/Routes';

const App: React.FC = () => {
  const isLogged = AuthService.IsLoggedIn();

  if (isLogged) {
    return (
      <Layout1>
        <Routes />
      </Layout1>
    );
  }

  return (
    <Routes />
  );
}

export default App;
