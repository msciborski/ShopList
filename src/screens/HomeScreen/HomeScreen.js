import React, { Component } from 'react';
import { Text } from 'react-native';
import { MenuIcon } from '../../components/MenuIcon';

export class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <MenuIcon size={30} navigation={this.props.navigation}/>
        );
    }
}