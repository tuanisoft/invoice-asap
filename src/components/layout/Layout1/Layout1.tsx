import { FC, useEffect, useState } from 'react';
import { Pane } from 'evergreen-ui';
import Toolbar from './Toolbar';
import './Layout1.scss';
import Loader from '../Loader/Loader';

const Layout1: FC = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  if (!loaded) {
    return <Loader />;
  }

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
