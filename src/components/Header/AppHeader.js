import React, { Component } from 'react';

export default class AppHeader extends Component {
    render() {
        const { title, navigation } = this.props;
        return (
            <Text>
                Header
            </Text>
        );
    }
}