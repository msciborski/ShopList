import React, { Component } from 'react';
import { Container, Card, CardItem, Body } from 'native-base';
import { Text } from 'react-native';
import AppHeader from '../components/AppHeader/AppHeader';
import SimpleList from '../components/SimpleList/SimpleList';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const mockElements = [ 'List1', 'List2', 'List3', 'List4', 'List5'];

        return (
            <Container>
                <AppHeader title={"Home"} navigation={this.props.navigation} />
                <Card>
                    <CardItem header>
                        <Text>Latest shopping lists</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <SimpleList elements={mockElements} />
                        </Body>
                    </CardItem>
                </Card>
            </Container>
        );
    }
}