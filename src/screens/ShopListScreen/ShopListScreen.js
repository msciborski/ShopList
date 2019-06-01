import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';

export class ShopListScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        console.log('Navigation shopList', navigation);
        const shopListElements = navigation.getParam('shopListElements');
        console.log('ShopListElements in ShopList', shopListElements);
        return (
            <View>
                {
                    shopListElements.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                                title={item.Name}
                            />
                        )
                    })
                }
            </View>
        )
    }
}