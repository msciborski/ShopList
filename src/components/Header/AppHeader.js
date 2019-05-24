import React, { Component } from 'react';
import { Header, Left, Right, Body, Title, Button, Icon } from 'native-base';

export default class AppHeader extends Component {
    render() {
        const { title, navigation } = this.props;
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.toggleDrawer()}>
                        <Icon name="home" android="md-menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>
                        {title}
                    </Title>
                </Body>
                <Right />
            </Header>
        );
    }
}