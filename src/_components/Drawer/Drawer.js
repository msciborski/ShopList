import React, { Component } from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import { Home } from '../../_screens/Home';
import { ShoppingLists } from '../../_screens/ShoppingLists';

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
            screen: ShoppingLists,
        }
    }, DrawerConfig);

const appContainer = createAppContainer(DrawerNavigator);

export { appContainer as Drawer };