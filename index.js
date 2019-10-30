/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './src/page/home/Home';
import Register from './src/page/register/Register';
import Login from './src/page/login/Login';

AppRegistry.registerComponent(appName, () => App);
