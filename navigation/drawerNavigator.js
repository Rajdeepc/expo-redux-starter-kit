import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Atoms from '../views/AtomPage/index';
import Molecules from '../views/MoleculePage/index';


const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
    return (
      <Drawer.Navigator initialRouteName="Atoms">
        <Drawer.Screen name="Atoms" component={Atoms} />
        <Drawer.Screen name="Molecules" component={Molecules} />
      </Drawer.Navigator>
    );
}

export default DrawerNavigation;