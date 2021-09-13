import React, { memo, useState } from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { AuthService } from '../../../services/auth.service';

import {
  Button, Pane, Link
} from 'evergreen-ui';
import VBox from '../../helpers/VBox';

const Toolbar: React.FC = () => {
  const history = useHistory();
  const [path, setPath] = useState(history.location.pathname);

  history.listen(() => {
    setPath(history.location.pathname);
  });

  return (
    <Pane
      display="flex"
      position="sticky"
      top={0}
      flexFlow="row"
      justifyContent="center"
      background="tint1"
      marginBottom={15}
      paddingY={15}
      paddingX={10}
      elevation={1}
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
        </Pane>

        <Button appearance="primary" onClick={() => AuthService.Logout()}>Logout</Button>
      </Pane>
    </Pane >
  );
};

export default memo(Toolbar);
