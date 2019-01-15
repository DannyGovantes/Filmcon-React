import React,{Component} from 'react';
import { View, Button, Text } from 'react-native';
import * as firebase from "firebase";
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

var config = {
    apiKey: "AIzaSyAlSGvofVwY345VzVOhiPkqWicdAP3DLGg",
    authDomain: "filmconpra.firebaseapp.com",
    databaseURL: "https://filmconpra.firebaseio.com",
    projectId: "filmconpra",
    storageBucket: "filmconpra.appspot.com",
    messagingSenderId: "11718023847"
};
firebase.initializeApp(config);

class LoginScreen extends Component {
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
        firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            //Alert bienvenido usuario
            this.setState({ error: '', loading: false });
            this.props.navigation.navigate('Dashboard');
            
        }).catch((err) => {
            //Alerta de error
            this.setState({ error: 'Error with validation', loading: false });
        })
    }

    renderButtonOrLoading() {
        if (this.state.loading) {
            return <Text>Loading</Text>
        }
        return <View>
            <Button onPress={this.onLoginPress.bind(this)} title="Login" />
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

                <Button onPress={()=> this.props.navigation.navigate('SignupScreen')}
                title='¿No tienes cuenta? Regístrate'/>

            </View>

        )
    }
}
export default LoginScreen;