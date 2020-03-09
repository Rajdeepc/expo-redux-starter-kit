import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Atoms from '../views/AtomPage/index';
import Molecules from '../views/MoleculePage/index';


const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
      <Stack.Navigator
        initialRouteName="Atoms"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name="Atoms"
          component={Atoms}
          options={{ title: 'My app' }}
        />
        <Stack.Screen
          name="Molecules"
          component={Molecules}
          initialParams={{ user: 'me' }}
        />
      </Stack.Navigator>
    );
  }


  export default StackNavigation;