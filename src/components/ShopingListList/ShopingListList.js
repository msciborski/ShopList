import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';

export class ShopingListList extends Component {
    constructor(props) {
        super(props);
    }


    handleListElementPress = (shopListElements) => {
        const { navigation } = this.props;
        console.log('ShopingListElements', shopListElements);
        console.log('Shoping list props', this.props);
        console.log('Navigation', navigation);
        navigation.navigate('ShopingListStack');
        navigation.navigate('ShopingList', { shopListElements: shopListElements });
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
                                onPress={() => this.handleListElementPress([...item.shopListElements])}
                            />
                        );
                    })
                }
            </View>
        )
    }
}