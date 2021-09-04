import { Button } from 'evergreen-ui';
import React from 'react';
import { AuthService } from '../../../services/auth.service';
import './Layout1.scss';

const Layout1: React.FC = ({ children }) => {
  return (
    <div className="Layout1">
      <Button onClick={() => AuthService.Logout()}>Logout</Button>

      {children}
    </div>
  )
};

export default Layout1;
