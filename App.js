import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { Drawer } from './src/_components/Drawer';
import { Container } from 'native-base';
import { Provider } from 'react-redux';

import store from './src/_store';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Container>
                    <Drawer />
                </Container>
            </Provider>
        );
    }
}