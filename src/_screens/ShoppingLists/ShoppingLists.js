import React, { Component } from 'react';
import { Container } from 'native-base';
import { AppHeader } from '../../_components/AppHeader';

class ShoppingLists extends Component {
    render() {
        return  (
            <Container>
                <AppHeader title={"Shoping lists"} navigation={this.props.navigation} />
            </Container>
        )
    }
}

export { ShoppingLists };