import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    menu: {
        padding: 20,
        marginRight: 'auto',
    }
})
export class MenuIcon extends Component {
    render() {
        const { size, navigation } = this.props;
        return <Icon name="bars" size={size} onPress={() => navigation.toggleDrawer()} style={styles.menu} />;
    }
}
