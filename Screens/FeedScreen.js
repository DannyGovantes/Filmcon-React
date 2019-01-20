import React, { Component } from 'react';
import { View, Image,StyleSheet,ImageBackground } from 'react-native';
import { Card, ListItem, Button, Text } from 'react-native-elements'


class FeedScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                
                <Card 
                    containerStyle={styles.card}
                    dividerStyle={styles.dividerStl}
                    title='HELLO WORLD'
                    titleStyle={styles.titleStl}
                    image={require('../images/pic2.jpg')}
                    imageProps={{resizeMode:'repeat'}}
                    >

                    <Text style={{ marginBottom: 10,color:'white' }}>
                        The idea with React Native Elements is more about component structure than actual design.
                     </Text>
                    <Button
                        icon={{ name: 'code' }}
                        backgroundColor='#03A9F4'
                        transparent
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />

                </Card>

            </View>
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
    card:{
        borderRadius:15,
        backgroundColor:'#2B2E2F',
        borderColor:'transparent',
        height: '93%',
        width: '95%',

        
        
    },
    dividerStl:{
        backgroundColor:'transparent'
    },
    titleStl:{
        textAlign:'left',
        color:'#575757',
        marginLeft:5,

    },
    imageStl:{
        

    }
});

export default FeedScreen;