import { Pane } from 'evergreen-ui';
import React from 'react';
import Toolbar from './Toolbar';
import './Layout1.scss';

const Layout1: React.FC = ({ children }) => {
  return (
    <div className="Layout1">
      <Toolbar />

      <Pane display="flex" flexFlow="row nowrap" justifyContent="center" paddingX={10}>
        <Pane width="100%" maxWidth={1024}>
          {children}
        </Pane>
      </Pane>
    </div>
  )
};

export default Layout1;
