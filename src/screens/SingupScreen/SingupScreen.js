import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    cardBody: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '100%',
    }

})

export class SingUpScreen extends Component {
    render() {
        return (
            <Text>Singup Screen</Text>
        );
    }
}