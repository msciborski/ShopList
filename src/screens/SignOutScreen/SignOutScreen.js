import React, { Component } from 'react';
import { connect } from 'react-redux';

import { usersAuthActions } from '../../_actions';

class SignOutScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { signOut } = this.props;
        signOut();
        this.props.navigation.navigate('Auth');
    }

    render() {
        return null;
    }
}

const mapStateToProps = state => {
    const { authUser } = state;
    console.log('AuthUser', authUser);
    return {
        authUser,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(usersAuthActions.signOut()),
    };
}

const connectedSignOutScreen = connect(mapStateToProps, mapDispatchToProps)(SignOutScreen);

export { connectedSignOutScreen as SignOutScreen }