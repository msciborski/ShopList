import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';

export class ShopingListList extends Component {
    constructor(props) {
        super(props);
    }


    handleListElementPress = (shopList) => {
        const { navigation } = this.props;
        const { name, shopListElements } = shopList;

        navigation.navigate('ShopingListStack');
        navigation.navigate('ShopingList', { shopList });
    }

    render() {
        const { shopingLists } = this.props;

        return (
            <View>
                {
                    shopingLists.map((item, i) => {
                        return (
                            <ListItem
                                key={i}
                                title={item.name}
                                onPress={() => this.handleListElementPress(item)}
                            />
                        );
                    })
                }
            </View>
        )
    }
}