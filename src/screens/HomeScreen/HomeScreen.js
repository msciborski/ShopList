import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { MenuIcon } from '../../components/MenuIcon';
import { shopListActions } from '../../_actions';
import { ShopingListList } from '../../components/ShopingListList';
import firebase from 'react-native-firebase';

const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('cars');

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

        console.log('Firebase admob:', firebase.admob);
        return (
            userShopLists ?
            <View>
                <MenuIcon size={30} navigation={this.props.navigation} />
                <ShopingListList shopingLists={userShopLists} navigation={navigation} />
                <Banner 
                    style={{ alignSelf: 'flex-end', flexDirection: 'column'}}
                    size={"LARGE_BANNER"}
                    request={request.build()}
                    unitId="ca-app-pub-3748001695252983/2558715232"
                    onAdLoaded={() => console.log('Advert loaded')}
                    onAdFailedToLoad={err => console.log(err)}
                />
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