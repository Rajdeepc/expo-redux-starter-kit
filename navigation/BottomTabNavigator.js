import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Atoms from '../views/AtomPage/index';
import Molecules from '../views/MoleculePage/index';


const Tab = createBottomTabNavigator();


const BottomTabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Atoms" component={Atoms} />
      <Tab.Screen name="Molecules" component={Molecules} />
    </Tab.Navigator>
  );

}


export default BottomTabNavigation;
