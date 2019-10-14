import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import Login from './login/Login';
import Register from './register/Register';
import Home from './home/Home';
import StepOne from './splash/step1/StepOne';
import StepTwo from './splash/step2/StepTwo';
import MyDrawer from '../components/MyDrawer';
import Loading from './loading/Loading';
const Configuration = createStackNavigator(
  {
    Loading: {
      screen: Loading,
    },
    StepOne: {
      screen: StepOne,
    },
    StepTwo: {
      screen: StepTwo,
    },
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
    Home: {
      screen: Home,
    },
  },
  {
    headerMode: 'none',
  },
);
const MainDrawer = createDrawerNavigator(
  {
    MainPages: Configuration
  },
  {
    contentComponent: MyDrawer,
    drawerBackgroundColor: 'red',
    drawerPosition: 'right',
    hideStatusBar:true,
    overlayColor:2,
    drawerWidth:400,
  },
);
export default createAppContainer(MainDrawer);
