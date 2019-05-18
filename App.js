import React, { Component } from 'react';
import { View } from 'react-native';
import DrawerNavigator from './src/components/Drawer/Drawer';
import { Container } from 'native-base';

export default class App extends Component {
    render() {
        return (
            <Container>
                <DrawerNavigator />
            </Container>
        );
    }
}