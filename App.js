import React, { Component } from 'react';
import { createSwitchNavigator,createAppContainer,createDrawerNavigator,createBottomTabNavigator,createStackNavigator } from "react-navigation";
import { View, Text, StyleSheet, Button } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import FeedScreen from './Screens/FeedScreen';


class App extends Component {
  render(){
    return <AppContainer/>;
  }
}
export default App;
class DashboardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DashboardScreen</Text>
      </View>
    );
  }
}
class Feed extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Feed</Text>
      </View>
    );
  }
}
class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile</Text>
      </View>
    );
  }
}
class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }
}


const DashBoardTabNavigator=createBottomTabNavigator({
  Feed,
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
const DashBoardStackNavigator = createStackNavigator({
  DashBoardTabNavigator: DashBoardTabNavigator
})

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard:{screen: DashBoardStackNavigator}
})

const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  SignupScreen: { screen: SignupScreen },
  Dashboard: { screen: AppDrawerNavigator }
})
const AppContainer = createAppContainer(AppSwitchNavigator);

