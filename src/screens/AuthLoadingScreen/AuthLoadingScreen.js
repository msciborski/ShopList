import React, { Component } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';

import RNFirebase from '../../Firebase';

export class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('ComponentDidMout');
        RNFirebase.auth().onAuthStateChanged(user => {
            console.log(user);

            this.props.navigation.navigate(user ? 'App' : 'Auth');
        })
    }
    
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}