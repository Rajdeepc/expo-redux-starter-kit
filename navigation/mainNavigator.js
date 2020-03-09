import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './drawerNavigator';

const MainNavigator = () => {
    return(
        <NavigationContainer>
            <DrawerNavigation/>
        </NavigationContainer>
    )
}

export default MainNavigator;