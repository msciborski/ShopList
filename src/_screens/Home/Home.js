import React, { Component } from 'react';
import { firestoreConnect} from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { usersActions } from '../../_actions';
import { Container, Card, CardItem, Body } from 'native-base';
import { Text } from 'react-native';
import { AppHeader } from '../../_components/AppHeader';
import { SimpleList } from '../../_components/SimpleList';
import { users } from '../../_reducers/users.reducer';


class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const mockElements = [ 'List1', 'List2', 'List3', 'List4', 'List5'];

        return (
            <Container>
                <AppHeader title="Home" navigation={this.props.navigation} />
                <Card>
                    <CardItem header>
                        <Text>Latest shopping lists</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <SimpleList elements={mockElements} />
                        </Body>
                    </CardItem>
                </Card>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: userId => dispatch(usersActions.getUser(userId)),
    };
}

const mapStateToProps = state => {
    return {
        users: state.firestore.users,
    };
}

const composedHome = compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'users' }
    ]),
)(Home);

export { composedHome as Home };