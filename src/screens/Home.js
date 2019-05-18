import React, { Component } from 'react';
import { Container } from 'native-base';
import { Text } from 'react-native';
import AppHeader from '../components/AppHeader/AppHeader';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <Container>
                <AppHeader title={"Home"} navigation={this.props.navigation} />
            </Container>
        );
    }
}