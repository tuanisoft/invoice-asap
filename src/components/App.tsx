import { FC } from 'react';
import { ThemeProvider } from 'evergreen-ui';
import { useRecoilValue } from 'recoil';
import { themeState } from './recoil/theme';

import { AuthService } from '../services/auth.service';
import Layout1 from './layout/Layout1/Layout1';
import Routes from './layout/Routes';
import ThemeLoader from './layout/Layout1/ThemeLoader';

const App: FC = () => {
  const theme = useRecoilValue(themeState);
  const isLogged = AuthService.IsLoggedIn();

  if (isLogged) {
    return (
      <ThemeProvider value={theme}>
        <ThemeLoader />
        <Layout1>
          <Routes />
        </Layout1>
      </ThemeProvider>
    );
  }

  return (<Routes />);
}

export default App;
