import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements';


export class ShopListScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('name', 'List'),
            headerLeft: (
                <Icon
                    name="chevron-left"
                    size={30}
                    style={{ padding: 10 }}
                    onPress={() => navigation.navigate('App')}
                />
            ),
        };
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        const shopListElements = navigation.getParam('shopListElements');

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