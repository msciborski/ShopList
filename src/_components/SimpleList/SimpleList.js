import React, { Component } from 'react';
import { List, ListItem, Text } from 'native-base';

class SimpleList extends Component {
    render() {
        const { elements } = this.props;
        return (
            <List>
                {
                    elements.map(element => <ListItem><Text>element</Text></ListItem>)
                }
            </List>
        )
    }
}

export { SimpleList };