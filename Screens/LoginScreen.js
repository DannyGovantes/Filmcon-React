import React,{Component} from 'react';
import { View, StyleSheet, Animated, Easing, KeyboardAvoidingView,TouchableWithoutFeedback,Alert } from 'react-native';
import * as firebase from "firebase";
import { Button, Icon, FormLabel, FormInput,Text } from 'react-native-elements';
import DismissKeyboard from 'dismissKeyboard';


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


    componentWillMount(){
        this.animatedValue= new Animated.Value(0)
    }
    componentDidMount(){
        Animated.timing(this.animatedValue,{
            toValue:70,
            duration:500,
            easing:Easing.bounce
        }).start()
    }

    onLoginPress() {
        this.setState({ error: '', loading: 'true' });
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            //Alert bienvenido usuario
            
            this.props.navigation.navigate('Dashboard');
            
        }).catch((err) => {
            var error= err.message;
            Alert.alert(
                'Error',
                error,
                [
                    {text:'OK', onPress: ()=> console.log('OK, pressed')},
                ],
                {cancelable: false}
                
            );
            
        })
    }

    renderButtonOrLoading() {
        return <View>
            <Button 
                backgroundColor='#232323'
                outline
                rounded
                style={{ marginTop: 10 }}
                icon={{ name: 'envira', type: 'font-awesome' }}
            onPress={this.onLoginPress.bind(this)} title="Login" />
        </View>

    } 
    
    render() {

        const animatedStyle = {height: this.animatedValue}
        return (

            <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">

            
            <TouchableWithoutFeedback onPress={()=>{DismissKeyboard()}}>       
                
            <View style={styles.container}>

                <Animated.View style={[styles.filmcon, animatedStyle]}>
                    <Text h1
                    style={styles.filmcon}>
                    FILMCON
                    </Text>
                 </Animated.View>
                 
                <Icon style={{margin:'auto'}}
                    reverse
                    name='sc-telegram'
                    type='evilicon'
                    color='#7E7F7E'
                    size={30}
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
                onPress={()=> this.props.navigation.navigate('SignupScreen')}
                activityIndicatorStyle
                title='¿No tienes cuenta? Regístrate'/>
                
           </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

        )
           
    }
 
    
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#232323',
        justifyContent: 'center',
        padding: 10,

    },
    filmcon: { 
        textAlign: 'center',
        color: 'white' 
    },
    oldState:{
        flex:0,
        padding: 10,
        marginTop:20

    }



});
export default LoginScreen;