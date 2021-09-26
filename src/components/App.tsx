import { FC, Fragment } from 'react';
import { AuthService } from '../services/auth.service';
import Layout1 from './layout/Layout1/Layout1';
import ThemeLoader from './layout/Layout1/ThemeLoader';
import Routes from './layout/Routes';

const App: FC = () => {
  const isLogged = AuthService.IsLoggedIn();

  if (isLogged) {
    return (
      <Fragment>
        <ThemeLoader />

        <Layout1>
          <Routes />
        </Layout1>
      </Fragment>
    );
  }

  return (<Routes />);
}

export default App;
