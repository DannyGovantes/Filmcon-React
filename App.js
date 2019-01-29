import React, { Component } from 'react';
import { createSwitchNavigator,createAppContainer,createDrawerNavigator,createBottomTabNavigator,createStackNavigator } from "react-navigation";
import { View, Text, StyleSheet, Button } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import FeedScreen from './Screens/FeedScreen';
import * as firebase from "firebase";




var config = {
  apiKey: "AIzaSyAlSGvofVwY345VzVOhiPkqWicdAP3DLGg",
  authDomain: "filmconpra.firebaseapp.com",
  databaseURL: "https://filmconpra.firebaseio.com",
  projectId: "filmconpra",
  storageBucket: "filmconpra.appspot.com",
  messagingSenderId: "11718023847"
};
firebase.initializeApp(config);

//App container 
class App extends Component {
  render(){
    return <AppContainer/>;
  }
}
export default App;
//--------------------------------------------------------------------------------------

//DashBoard screen 
class DashboardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DashboardScreen</Text>
      </View>
    );
  }
}
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

//-------------------------------------------------------------------------------------


class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }
}

//-------------------------------------------------------------------------------------
const DashBoardTabNavigator=createBottomTabNavigator({
  FeedScreen :{screen: FeedScreen},
  Profile,
  Settings
}, {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);

//-------------------------------------------------------------------------------------
const DashBoardStackNavigator = createStackNavigator({
  DashBoardTabNavigator: DashBoardTabNavigator
})
//-------------------------------------------------------------------------------------
const AppDrawerNavigator = createDrawerNavigator({
  Dashboard:{screen: DashBoardStackNavigator}
})
//-------------------------------------------------------------------------------------
const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  SignupScreen: { screen: SignupScreen },
  Dashboard: { screen: AppDrawerNavigator }
})
const AppContainer = createAppContainer(AppSwitchNavigator);
//-------------------------------------------------------------------------------------

