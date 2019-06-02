import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { MenuIcon } from '../../components/MenuIcon';
import { shopListActions } from '../../_actions';
import { ShopingListList } from '../../components/ShopingListList';


class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { getUserShopLists } = this.props;
        const userId = 'cNfPjAtLY7bce65VeZJwVbU7M213';

        getUserShopLists(userId);
    }

    render() {
        const { userShopLists } = this.props;
        const { navigation } = this.props;
        return (
            userShopLists ?
            <View>
                <MenuIcon size={30} navigation={this.props.navigation} />
                <ShopingListList shopingLists={userShopLists} navigation={navigation} />
            </View> :
            <View>
                <MenuIcon size={30} navigation={this.props.navigation} />
            </View>
        );
    }
}


const mapStateToProps = state => {
    const { shopListReducer } = state;
    console.log('State', state);
    return {
        userShopLists: shopListReducer.userShopLists,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getUserShopLists: (userId) => dispatch(shopListActions.getUserShopLists(userId)),
    };
}

const connectedHome = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export { connectedHome as HomeScreen };