import React from 'react';
import { GoogleLoginButton, MicrosoftLoginButton } from 'react-social-login-buttons';
import { AuthService } from '../../../services/auth.service';
import './Login.scss';

const Login: React.FC = () => {
  return (
    <div className="Login">
      <div className="loginPane">
        <h1 style={{ marginTop: 0 }}>INVOICE ASAP</h1>
        <h3>Inicia Sesión</h3>

        <GoogleLoginButton onClick={() => AuthService.LoginWithGoogle()} style={{ marginBottom: '1.2em' }} />

        <MicrosoftLoginButton onClick={() => AuthService.LoginWithMicrosoft()} />
      </div>
    </div>
  )
};

export default Login;
