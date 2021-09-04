import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

import { config } from './config';

const app = initializeApp(config.firebase);

initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(config.recaptcha.siteKey),
    isTokenAutoRefreshEnabled: false
});
