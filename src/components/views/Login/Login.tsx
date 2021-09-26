import { Heading } from 'evergreen-ui';
import React from 'react';
import { FacebookLoginButton, GoogleLoginButton, MicrosoftLoginButton } from 'react-social-login-buttons';
import { AuthService } from '../../../services/auth.service';
import './Login.scss';

const Login: React.FC = () => {
  return (
    <div className="Login">
      <div className="loginPane">
        <img src="./img/receipt-128.png" alt="Invoice ASAP" className="logo" />
        <Heading is="h1" size={900} marginBottom={10}>INVOICE ASAP</Heading>
        <Heading is="h3" size={800} marginBottom={10}>Inicia Sesión</Heading>

        <GoogleLoginButton onClick={() => AuthService.LoginWithGoogle()} style={{ marginBottom: '1.2em' }} />

        <MicrosoftLoginButton onClick={() => AuthService.LoginWithMicrosoft()} style={{ marginBottom: '1.2em' }} />

        <FacebookLoginButton onClick={() => AuthService.LoginWithFacebook()} />
      </div>
    </div>
  )
};

export default Login;
