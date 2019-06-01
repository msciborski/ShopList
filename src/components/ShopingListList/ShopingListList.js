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
        navigation.navigate('ShopingList', { shopListElements: shopListElements, name });
    }

    render() {
        const { shopingLists } = this.props;

        return (
            <View>
                {
                    shopingLists.map((item, i) => {
                        const { shopListElements } = item;
                        console.log('ShopListElements from ShpingListList', shopListElements);
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