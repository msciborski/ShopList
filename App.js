import React, { Component } from 'react';
import { View } from 'react-native';
import { Drawer } from './src/_components/Drawer';
import { Container } from 'native-base';

export default class App extends Component {
    render() {
        return (
            <Container>
                <Drawer />
            </Container>
        );
    }
}