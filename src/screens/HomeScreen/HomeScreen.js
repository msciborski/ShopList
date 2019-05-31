import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { MenuIcon } from '../../components/MenuIcon';
import { shopListActions } from '../../_actions';


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
        return (
            <View>
            <MenuIcon size={30} navigation={this.props.navigation}/>
            <Text></Text>
            </View>
        );
    }
}


const mapStateToProps = state => {
    const { shopListReducer } = state;

    return {
        shopListReducer,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getUserShopLists: (userId) => dispatch(shopListActions.getUserShopLists(userId)),
    };
}

const connectedHome = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export { connectedHome as HomeScreen };