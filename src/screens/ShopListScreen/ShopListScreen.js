import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
            headerRight: (
                !navigation.getParam('addButtonPressed') ?
                    <Icon
                        name="plus"
                        size={30}
                        style={{ padding: 10 }}
                        onPress={() => navigation.getParam('handleAddButton')()}
                    /> :
                    <View style={{ flexDirection: 'row'}}>
                        <Icon 
                            name="check"
                            size={30}
                            style={{ padding: 10 }}
                            onPress={() => navigation.getParam('handleAcceptButton')()}
                        />
                        <Icon 
                            name="times"
                            size={30}
                            style={{ padding: 10 }}
                            onPress={() => navigation.getParam('handleCancelButton')()}
                        />
                    </View>
            )
        };
    }

    constructor(props) {
        super(props);
        this.props.navigation.setParams({ handleAddButton: this.handleAddButtonPress, handleCancelButton: this.handleCancelButtonPress, handleAcceptButton: this.handleAcceptButtonPress });

        const shopList = navigation.getParam('shopList');

        this.state = {
            IsAddButtonPressed: false,
            shopList,
        }
    }

    handleAddButtonPress = () => {
        this.props.navigation.setParams({ addButtonPressed: true });
        this.setState({ IsAddButtonPressed: true });
    }

    handleCancelButtonPress = () => {
        this.props.navigation.setParams({ addButtonPressed: false });
        this.setState({ IsAddButtonPressed: false });
    }

    handleAcceptButtonPress = () => {
        this.props.navigation.setParams({ addButtonPressed: false });
        this.setState({ IsAddButtonPressed: false });
    }

    render() {
        const { navigation } = this.props;
        const { IsAddButtonPressed, shopList } = this.state;

        const { shopListElements } = shopList;

        return (
            <View>
                {
                    shopListElements.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                                title={item.Name}
                                checkBox={{ checked: item.isChecked }}
                            />
                        )
                    })
                }
                {
                    IsAddButtonPressed &&
                        <Text>Button clicked</Text>
                }
            </View>
        )
    }
}