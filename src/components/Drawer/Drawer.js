import React, { Component } from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Home from '../../screens/Home';
import List from '../../screens/List';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH * 0.83,

}

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Home,
        },
        List: {
            screen: List,
        }
    }, DrawerConfig);

export default createAppContainer(DrawerNavigator);