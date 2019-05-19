import React, { Component } from 'react';
import { Container } from 'native-base';
import AppHeader from '../components/AppHeader/AppHeader';

export default class ShoppingLists extends Component {
    render() {
        return  (
            <Container>
                <AppHeader title={"Shoping lists"} navigation={this.props.navigation} />
            </Container>
        )
    }
}