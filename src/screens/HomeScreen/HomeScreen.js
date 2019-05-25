import React, { Component } from 'react';
import { Text } from 'react-native';


export class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <Text>Home</Text>
        );
    }
}