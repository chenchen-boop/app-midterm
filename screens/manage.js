import React, { Component } from 'react';
import {View,Button,Text, SafeAreaView, StyleSheet, TextInput}from 'react-native';
import { useNavigation } from '@react-navigation/native';


 class Manage extends Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props);
        return(
            <View>
                <Text>{this.props.route.params.player.number}</Text>
                <Text>{this.props.route.params.player.name}</Text>
                <Text>{this.props.route.params.player.height}</Text>
                <Text>{this.props.route.params.player.weight}</Text>

            </View>
             

        )
    }   


};


export default Manage;