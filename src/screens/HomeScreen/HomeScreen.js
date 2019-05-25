import React, { Component } from 'react';
import { Container } from 'native-base';
import { Text } from 'react-native';
import AppHeader from '../../components/Header/AppHeader';

export class HomeScreen extends Component {
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