import React, { Suspense } from 'react';
import { AuthService } from '../services/auth.service';
import Layout1 from './layout/Layout1/Layout1';
import ThemeLoader from './layout/Layout1/ThemeLoader';
import Loader from './layout/Loader/Loader';
import Routes from './layout/Routes';

const App: React.FC = () => {
  const isLogged = AuthService.IsLoggedIn();

  if (isLogged) {
    return (
      <Suspense fallback={<Loader />}>
        <ThemeLoader />

        <Layout1>
          <Routes />
        </Layout1>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<Loader />}>
      <Routes />
    </Suspense>
  );
}

export default App;
