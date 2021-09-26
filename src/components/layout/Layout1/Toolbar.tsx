import React, { memo, useState } from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { themeSelectorState } from '../../recoil/theme';

import { AuthService } from '../../../services/auth.service';
import VBox from '../../helpers/VBox';
import HBox from '../../helpers/HBox';

import {
  MoonIcon, ContrastIcon,
  Button, Pane, Link, Dialog, Switch, Text
} from 'evergreen-ui';

const Toolbar: React.FC = () => {
  const history = useHistory();
  const [path, setPath] = useState(history.location.pathname);
  const [isOpenLogout, setIsOpenLogout] = useState(false);

  const [themeKind, setThemeKind] = useRecoilState(themeSelectorState);
  const [darkMode, setDarkMode] = useState(themeKind === 'dark');

  history.listen(() => {
    setPath(history.location.pathname);
  });

  const handleLogout = (close: () => void) => {
    close();
    AuthService.Logout();
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setDarkMode(value);
    setThemeKind(value ? 'dark' : 'light');
  };

  return (
    <Pane
      className="toolbar"
      display="flex"
      position="sticky"
      top={0}
      flexFlow="row"
      justifyContent="center"
      background="tint1"
      marginBottom={15}
      paddingY={15}
      paddingX={10}
      boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      zIndex={1}>
      <Pane
        display="flex"
        flexFlow="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        maxWidth={1024}>
        <Pane
          display="flex"
          flexFlow="row"
          justifyContent="flex-start"
          alignItems="center">
          <VBox marginRight={17}>
            <Link is={RouterLink} to="/dashobard" color={(path.startsWith("/dashboard") || path.startsWith("/invoice")) ? undefined : 'neutral'}>
              Dashboard
            </Link>
          </VBox>

          <VBox marginRight={17}>
            <Link is={RouterLink} to="/profile" color={path.startsWith("/profile") ? undefined : 'neutral'}>
              Profile
            </Link>
          </VBox>

          <HBox justifyContent="end" alignItems="center" marginRight={15}>
            <Switch height={20}
              marginRight={10}
              checked={darkMode}
              onChange={handleThemeChange}
              backgroundColor="orange500" />
            {(darkMode === true) && <MoonIcon size={20} color="gray500" />}
            {(darkMode === false) && <ContrastIcon size={20} color="orange500" />}
          </HBox>
        </Pane>

        <HBox justifyContent="end" alignItems="center">
          <Button appearance="primary" onClick={() => setIsOpenLogout(true)}>Logout</Button>
        </HBox>
      </Pane>

      <Dialog
        isShown={isOpenLogout}
        title="Invoice ASAP"
        intent="warning"
        onCloseComplete={() => setIsOpenLogout(false)}
        onConfirm={handleLogout}
        confirmLabel="Logout"
      >
        <Text>
          {`Are you sure do you want to logout?`}
        </Text>
      </Dialog>
    </Pane>
  );
};

export default memo(Toolbar);
