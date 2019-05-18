import React, { Component } from 'react';
import { Container } from 'native-base';
import { Text } from 'react-native';
import AppHeader from '../components/AppHeader/AppHeader';

export default class List extends Component {
    render() {
        return  (
            <Container>
                <AppHeader title={"Shoping lists"} navigation={this.props.navigation} />
            </Container>
        )
    }
}