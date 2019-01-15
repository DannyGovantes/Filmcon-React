import React,{Component} from 'react';
import { View, Button, Text } from 'react-native';
import * as firebase from "firebase";
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'



class SignupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        };

    }


    onLoginPress() {
        this.setState({ error: '', loading: 'true' });
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {

            this.setState({ error: '', loading: false });
            //Navigate to feed
            this.props.navigation.navigate('FeedScreen');
        }).catch(() => {

            this.setState({ error: 'Error with validation', loading: false });
        })
    }

    renderButtonOrLoading() {
        if (this.state.loading) {
            return <Text>Loading</Text>
        }
        return <View>
            <Button onPress={this.onLoginPress.bind(this)} title="Sign Up" />
        </View>

    }
    render() {
        return (

            <View>
                <FormLabel>Email</FormLabel>
                <FormInput value={this.state.email}
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })} />
                <FormLabel>Password</FormLabel>
                <FormInput value={this.state.password}
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })} />
                {this.renderButtonOrLoading()}
            </View>

        )
    }
}
export default SignupScreen;