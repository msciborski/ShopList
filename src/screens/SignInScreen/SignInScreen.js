import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Card, Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

import { usersAuthActions } from '../../_actions';
import { HomeScreen } from '../HomeScreen';


const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
    },
    input: {
        padding: 10,
    },
    button: {
        padding: 10,
    }
})

class SignInScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: undefined,
            password: undefined,
        };
    }

    handleSingIn = () => {
        const { signIn } = this.props;
        const { email, password } = this.state;

        if (email && password) {
            signIn(email, password);
            this.setState({ email: '', password: '' })
        }
    }

    render() {
        const { email, password } = this.state;

        return (
            <ImageBackground source={{uri: "https://cdn.ramseysolutions.net/media/b2c/every_dollar/article-images/everydollar-grocery-shopping-patterns.jpg"}} style={{width: '100%', height: '100%'}}>
                <View style={styles.card}>
                    <Card style={{ flexDirection: 'column', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                        <Input
                            placeholder='Email'
                            leftIcon={
                                <Icon
                                    name='envelope'
                                    size={18}
                                    color='black'
                                />
                            }
                            onChangeText={text => this.setState({ email: text })}
                            value={email}
                            containerStyle={styles.input}
                        />
                        <Input
                            placeholder='Password'
                            leftIcon={
                                <Icon
                                    name='key'
                                    size={18}
                                    color='black'
                                />
                            }
                            onChangeText={text => this.setState({ password: text })}
                            value={password}
                            containerStyle={styles.input}
                        />
                        <Button title="Sing in" onPress={this.handleSingIn} containerStyle={styles.button} />
                    </Card>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => {
    const { authUser } = state;

    return {
        authUser,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (email, password) => dispatch(usersAuthActions.signIn(email, password)),
    }
}

const connectedSignInScreen = connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

export { connectedSignInScreen as SignInScreen };