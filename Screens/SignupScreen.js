import React,{Component} from 'react';
import { View, Button, Text } from 'react-native';
import * as firebase from "firebase";
import { FormValidationMessage } from 'react-native-elements'
import { Container,Content,Header,Form,Input,Item,Button,Label } from "native-base";


//Constructor
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

//Función de registro
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

    render() {
        return (
            <Container>
                <Form>
                    <Item>
                        <Label>Email</Label>
                        <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        />
                    </Item>
                    <Item>
                        <Label>Password</Label>
                        <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        />
                    </Item>
                    <Button
                    full
                    rounded
                    dark
                    />
                </Form>
            </Container>
        )
    }
}
export default SignupScreen;
/*<FormLabel>Email</FormLabel>
{ <FormInput value={this.state.email}
    placeholder="Email"
    onChangeText={email => this.setState({ email })} />
    <FormLabel>Password</FormLabel>
    <FormInput value={this.state.password}
        secureTextEntry
        placeholder="Password"
        onChangeText={password => this.setState({ password })} />
                    { this.renderButtonOrLoading() }
<Button onPress={() => this.props.navigation.navigate('LoginScreen')}
    title='¿Ya tienes cuenta? Inicia sesión' /> */