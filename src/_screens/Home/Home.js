import React, { Component } from 'react';
import { firestoreConnect} from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { usersActions } from '../../_actions';
import { NavigationEvents } from 'react-navigation';
import { Container, Card, CardItem, Body } from 'native-base';
import { Text } from 'react-native';
import { AppHeader } from '../../_components/AppHeader';
import { SimpleList } from '../../_components/SimpleList';

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    handleFocus = () => {
        const userId = 'DiFNsm73mkGMrSthQtB6';
        const { getUser } = this.props;

        getUser(userId);
    }

    render() {
        const mockElements = [ 'List1', 'List2', 'List3', 'List4', 'List5'];
        const { users } = this.props;
        console.log(users);
        console.log('Props', this.props);
        return (
            <Container>
                <NavigationEvents  onDidFocus={this.handleFocus} />
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
    console.log('State:', state);
    const { usersReducer } = state;
    console.log('usersReducer', usersReducer);
    return {
        users: state.firestore.ordered.users,
        user: usersReducer.user,
    };
}

const composedHome = compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'users' }
    ]),
)(Home);

export { composedHome as Home };