import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { MenuIcon } from '../../components/MenuIcon';

export class ShopingListListScreen extends Component {
    render() {
        return (
            <View>
                <MenuIcon size={30} navigation={this.props.navigation}/>
                <Text>
                    List
                </Text>
            </View>
        )
    }
}