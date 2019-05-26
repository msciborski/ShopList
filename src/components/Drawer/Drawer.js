import React, { Component } from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import { HomeScreen } from '../../screens/HomeScreen';
import { ShopingListListScreen } from '../../screens/ShopingListListScreen';
import { SingUpScreen } from '../../screens/SingupScreen';
import { SingInScreen } from '../../screens/SignInScreen';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH * 0.83,
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        List: {
            screen: ShopingListListScreen,
        },
        SingUp: {
            screen: SingUpScreen,
        },
        SingIn: {
            screen: SingInScreen,
        }
        
    }, DrawerConfig);

export default createAppContainer(DrawerNavigator);