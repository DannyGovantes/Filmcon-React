import React, { Component } from 'react';
import { Image,Button,StyleSheet } from "react-native";
import { Card,CardTitle, CardContent,CardAction,CardButton,CardImage } from "react-native-material-cards";

 class Cards extends Component{

render(){
    return(
        <Card>
            <CardImage source={{ uri: 'http://placehold.it/480x270' }} title="Above all i am here" />
            <CardTitle title="This is title" subtitle="This is sub title" />
            <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
            <CardAction seperator={true} inColumn={false}>
                <CardButton
                    onPress={() => { }}
                    title="Push"
                    color='blue'
                />
                <CardButton
                    onPress={() => { }}
                    title="Later"
                    color='blue'
                />
            </CardAction>
        </Card >
    )
}

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232323',
        justifyContent: 'center',
        padding: 5,
        alignItems: 'center'

    },
    card: {
        borderRadius: 15,
        backgroundColor: '#2B2E2F',
        borderColor: 'transparent',
        height: '93%',
        width: '95%',



    },
    dividerStl: {
        backgroundColor: 'transparent'
    },
    titleStl: {
        textAlign: 'left',
        color: '#575757',
        marginLeft: 5,

    },
    imageStl: {


    }
});
export default Cards;