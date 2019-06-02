import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements';
import { shopListActions } from '../../_actions';
import RNFirebase from '../../Firebase';


class ShopListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
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
                    <View style={{ flexDirection: 'row' }}>
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

        const shopList = this.props.navigation.getParam('shopList');

        this.state = {
            user: undefined,
            IsAddButtonPressed: false,
            shopList,
            newElementName: '',
        }
    }

    componentDidMount() {
        RNFirebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ user: user._user })
            }

            this.props.navigation.navigate(user ? 'ShopingListStack' : 'Auth');
        })
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
        const { newElementName, user, shopList } = this.state;
        const { addElement } = this.props;
        const element = { Name: newElementName, isChecked: false };

        addElement(shopList.id, user.uid, element);
        shopList.shopListElements.push(element);

        this.props.navigation.setParams({ addButtonPressed: false });
        this.setState({ IsAddButtonPressed: false });
        this.setState({ shopList });
    }

    render() {
        const { navigation } = this.props;
        const { IsAddButtonPressed, shopList, newElementName } = this.state;

        const { shopListElements } = shopList;

        return (
            shopList &&
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
                        <ListItem
                            title="New element name"
                            input={{ value: newElementName, onChangeText: text => this.setState({ newElementName: text }), inputContainerStyle: { flexDirection: 'row', backgroundColor: '#c2c6ce' } }}
                        />
                    }
                </View>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addElement: (shopListId, userId, element) => dispatch(shopListActions.addElementToShopList(shopListId, userId, element)),
    };
}

const connectedShopListScreen = connect(mapStateToProps, mapDispatchToProps)(ShopListScreen);

export { connectedShopListScreen as ShopListScreen };