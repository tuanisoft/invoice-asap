import React from 'react';
import { GoogleLoginButton, MicrosoftLoginButton } from 'react-social-login-buttons';
import { AuthService } from '../../../services/auth.service';
import './Login.scss';

const Login: React.FC = () => {
  const isLogged = AuthService.IsLoggedIn();

  return (
    <div className="Login">
      <div className="loginPane">
        <h3 style={{ marginTop: 0 }}>INVOICE ASAP</h3>
        <h3>Inicia Sesión</h3>
        {isLogged ? <div>Logged in</div> : <div>Not logged in</div>}

        <GoogleLoginButton onClick={() => AuthService.LoginWithGoogle()} style={{ marginBottom: '1.2em' }} />

        <MicrosoftLoginButton onClick={() => AuthService.LoginWithMicrosoft()} />
      </div>
    </div>
  )
};

export default Login;
