import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { MenuIcon } from '../../components/MenuIcon';
import { ShopingListList } from '../../components/ShopingListList';
import { shopListActions } from '../../_actions';

class ShopingListListScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAddShoplistButtonPressed: false,
            newElementName: '',
            userShopLists: this.props.userShopLists,
        };
    }

    handleAddButtonPress = () => {
        this.setState({ isAddShoplistButtonPressed: true });
    }

    handleAcceptButtonPress = () => {
        const { newElementName, userShopLists } = this.state;
        const { user, addShopList } = this.props;
        const newShopList = { name: newElementName, shopListElements: [] };

        addShopList(user.uid, newShopList);
        userShopLists.push(newShopList);
        this.setState({ isAddShoplistButtonPressed: false });
    }

    handleCancelButtonPress = () => {
        this.setState({ isAddShoplistButtonPressed: false });
    }
    render() {
        const { isAddShoplistButtonPressed, newElementName, userShopLists } = this.state;
        const { navigation } = this.props;

        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <MenuIcon size={30} navigation={this.props.navigation} />
                    <View>
                        {
                            isAddShoplistButtonPressed ?
                                <View style={{ flexDirection: 'row', marginLeft: 'auto', marginRight: 0 }}>
                                    <Icon
                                        name="check"
                                        size={30}
                                        style={{ padding: 20 }}
                                        onPress={this.handleAcceptButtonPress}
                                    />
                                    <Icon
                                        name="times"
                                        size={30}
                                        style={{ padding: 20 }}
                                        onPress={this.handleCancelButtonPress}
                                    />
                                </View>
                                :
                                <Icon
                                    name="plus"
                                    size={30}
                                    style={{ padding: 20, marginLeft: 'auto' }}
                                    onPress={this.handleAddButtonPress}
                                />
                        }

                    </View>
                </View>
                <View>
                    <ShopingListList shopingLists={userShopLists} navigation={navigation} />
                    {
                        isAddShoplistButtonPressed &&
                        <ListItem
                            title="New element name"
                            input={{ value: newElementName, onChangeText: text => this.setState({ newElementName: text }), inputContainerStyle: { flexDirection: 'row', backgroundColor: '#c2c6ce' } }}
                        />
                    }
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const { shopListReducer, firebase } = state;
    const { userShopLists } = shopListReducer;
    const { auth } = firebase;
    return {
        userShopLists,
        user: auth,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addShopList: (userId, shopList) => dispatch(shopListActions.addShoplist(userId, shopList)),
    }
}

const connectedShopingListListScreen = connect(mapStateToProps, mapDispatchToProps)(ShopingListListScreen);

export { connectedShopingListListScreen as ShopingListListScreen };