import React,{Component} from 'react';
import { View,StyleSheet,Animated,Easing } from 'react-native';
import * as firebase from "firebase";
import { Button, Icon, FormLabel, FormInput, FormValidationMessage,Text } from 'react-native-elements'


var actionCodeSettings = {
    url: 'https//www.google.com',
    handleCodeInApp: true,
    iOS:{
        bundleId: 'com.example.ios'
    },
    android: {
        packageName:'com.example.android',
        installApp:true,
        minimumVersion:'12'
    },
    dynamicaDomain: 'example.page.link'
};

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



    componentWillMount() {
        this.animatedValue = new Animated.Value(70)
    }
    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: 500,
            easing: Easing.bounce
        }).start()
    }

//Función de registro
    onSignUpPress() {
        this.setState({ error: '', loading: 'true' });
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
           //Mandar correo de autenticación
            firebase.auth().sendSignInLinkToEmail(email,actionCodeSettings).then(()=>{
                //Guardar email para el celular
                
            }).catch((err)=>{
                //Display error
            });

            this.setState({ loading: false });
            //Navigate to fee
            this.props.navigation.navigate('Dashboard');
        }).catch((err) => {
            //Mostrar error de que no se pudo registrar
            this.setState({ error: err.message, loading: false });
        })
    }
    renderButtonOrLoading() {
        return <View>
            <Button 
            backgroundColor='#232323'
            outline
            rounded
            style={{marginTop:10}}
            icon={{ name: 'envira', type: 'font-awesome' }}
            onPress={this.onSignUpPress.bind(this)} title="Sign Up" />
        </View>

    }

    render() {
        const animatedStyle = { height: this.animatedValue }
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.filmcon, animatedStyle]}>
                    <Text h1
                        style={styles.filmcon}>
                        FILMCON
                    </Text>
                </Animated.View>
                
                <Icon
                reverse
                name='sc-telegram'
                type='evilicon'
                    color='#7E7F7E'
                />
                <FormLabel>Email</FormLabel>
                <FormInput value={this.state.email}
                    placeholder="Email"
                    placeholderTextColor="white"
                    autoCapitalize={"none"}
                    keyboardType={"email-address"}
                    returnKeyType={"next"}
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    blurOnSubmit={false}
                    onChangeText={email => this.setState({ email })} />

                <FormLabel>Password</FormLabel>
                
                <FormInput value={this.state.password}
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="white"
                    ref={(input) => { this.secondTextInput = input; }}
                    onChangeText={password => this.setState({ password })} />
                {this.renderButtonOrLoading()}

                <Button
                transparent
                color='white'
                onPress={() => this.props.navigation.navigate('LoginScreen')}
                    title='¿Ya tienes cuenta? Inicia sesión' />
            </View>
        
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#232323',
        justifyContent: 'center',
        padding:10,
        
    },
    filmcon: {
        textAlign: 'center',
        color: 'white'
    }
    

});
export default SignupScreen;
