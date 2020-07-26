import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Signup, Home, Acount} from './../../Screen/index';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from 'native-base';
const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={DraweNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();

function DraweNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({color}) => <Icon name="home" size={24} />,
        }}
      />
      <Drawer.Screen
        name="Acount"
        component={Acount}
        options={{
          drawerLabel: 'setting',
          drawerIcon: ({color}) => <Icon name="settings" size={24} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default StackNavigation;
