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
        this.state = {
            addButtonPressed: false,
        }
    }

    handleAddButtonPress = () => {
        this.props.navigation.setParams({ addButtonPressed: true });
        this.setState({ addButtonPressed: true });
    }

    handleCancelButtonPress = () => {
        this.props.navigation.setParams({ addButtonPressed: false });
        this.setState({ addButtonPressed: false });
    }

    handleAcceptButtonPress = () => {
        this.props.navigation.setParams({ addButtonPressed: false });
        this.setState({ addButtonPressed: false });
    }

    render() {
        const { navigation } = this.props;
        const { addButtonPressed } = this.state;
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
                {
                    addButtonPressed &&
                        <Text>Button clicked</Text>
                }
            </View>
        )
    }
}