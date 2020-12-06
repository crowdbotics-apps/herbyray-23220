import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Additem182601Navigator from '../features/Additem182601/navigator';
import Maps182597Navigator from '../features/Maps182597/navigator';
import UserProfile182593Navigator from '../features/UserProfile182593/navigator';
import Maps182553Navigator from '../features/Maps182553/navigator';
import Additem182552Navigator from '../features/Additem182552/navigator';
import Maps182548Navigator from '../features/Maps182548/navigator';
import UserProfile182544Navigator from '../features/UserProfile182544/navigator';
import SignIn22182521Navigator from '../features/SignIn22182521/navigator';
import BlankScreen0182520Navigator from '../features/BlankScreen0182520/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Additem182601: { screen: Additem182601Navigator },
Maps182597: { screen: Maps182597Navigator },
UserProfile182593: { screen: UserProfile182593Navigator },
Maps182553: { screen: Maps182553Navigator },
Additem182552: { screen: Additem182552Navigator },
Maps182548: { screen: Maps182548Navigator },
UserProfile182544: { screen: UserProfile182544Navigator },
SignIn22182521: { screen: SignIn22182521Navigator },
BlankScreen0182520: { screen: BlankScreen0182520Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
