import React, { Component } from 'react';
import { View } from 'react-native';
import DrawerNavigator from './src/components/Drawer/Drawer';
import { Container } from 'native-base';
import { Provider } from 'react-redux';

import store from './src/_store';
console.log(store);
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Container>
                    <DrawerNavigator />
                </Container>
            </Provider>
        );
    }
}