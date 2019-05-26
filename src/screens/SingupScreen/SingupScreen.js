import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

import { usersAuthActions } from '../../_actions';
import { HomeScreen } from '../HomeScreen';


const styles = StyleSheet.create({
    card: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})

class SingUpScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSingUp = () => {
        const { singUp } = this.props;
        const { email, password } = this.state;

        singUp(email, password);
        this.setState({ email: '', password: '' })
    }

    render() {
        const { email, password } = this.state;

        return (
            <View style={{flexDirection: 'row'}}>
            <Card>
                <View>
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
                        style={{width: 200}}
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
                    />
                    <Button title="Sing up" onPress={this.handleSingUp}/>
                </View>
            </Card>
            </View>
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
        singUp: (email, password) => dispatch(usersAuthActions.singUp(email, password)),     
    }
}

const connectedSingUpScreen = connect(mapStateToProps, mapDispatchToProps)(SingUpScreen);

export { connectedSingUpScreen as SingUpScreen };