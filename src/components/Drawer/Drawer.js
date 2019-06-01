import React, { Component } from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import { HomeScreen } from '../../screens/HomeScreen';
import { ShopingListListScreen } from '../../screens/ShopingListListScreen';
import { SignUpScreen } from '../../screens/SignupScreen';
import { SignInScreen } from '../../screens/SignInScreen';
import { SignOutScreen } from '../../screens/SignOutScreen';
import { AuthLoadingScreen } from '../../screens/AuthLoadingScreen';
import { ShopListScreen } from '../../screens/ShopListScreen';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH * 0.83,
}

const AuthStack = createDrawerNavigator({
    SingUp: {
        screen: SignUpScreen,
    },
    SingIn: {
        screen: SignInScreen,
    }
}, { initialRouteName: 'SingIn' });

const AppStack = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    ShopingList: {
        screen: ShopingListListScreen
    },
    Logout: {
        screen: SignOutScreen,
    },
}, { initialRouteName: 'Home' });

const shopingListStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    ShopingListList: {
        screen: ShopingListListScreen,
    },
    ShopingList: {
        screen: ShopListScreen,
    },
    Logout: {
        screen: SignOutScreen,
    },
}, { initialRouteName: 'ShopingList'});


const MainSwitchNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
    ShopingListStack: shopingListStack,
}, { initialRouteName: 'AuthLoading' });

export default createAppContainer(MainSwitchNavigator);