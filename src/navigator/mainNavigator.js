import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfSettings7197370Navigator from '../features/CopyOfSettings7197370/navigator';
import Settings7197368Navigator from '../features/Settings7197368/navigator';
import SignIn53197364Navigator from '../features/SignIn53197364/navigator';
import SignUp22197363Navigator from '../features/SignUp22197363/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfSettings7197370: { screen: CopyOfSettings7197370Navigator },
Settings7197368: { screen: Settings7197368Navigator },
SignIn53197364: { screen: SignIn53197364Navigator },
SignUp22197363: { screen: SignUp22197363Navigator },

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
