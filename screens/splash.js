import {StyleSheet,View,Button,Text,SafeAreaView,TouchableWithoutFeedback}from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import GlobalStyle from '../styles/global'
import * as Animatable from "react-native-animatable";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 


export default class  Splash extends Component{
   
    componentWillMount(){
   
         setTimeout(()=>{this.props.navigation.navigate('Home')},5000);
    }
    render(){
        return(
            <View style={[GlobalStyle.container,styles.splash,]}>
            
              
                <Animatable.View  animation="rotate" duration={1000} iterationCount='infinite' direction="alternate">
                <FontAwesome5 name="basketball-ball" size={200} color="red" />
                </Animatable.View> 
                
             
            <View style={{alignItems:'center', marginTop:300}}>
                <Text style={[GlobalStyle.text,styles.text1]}>Director</Text>
                <Text style={[GlobalStyle.text,styles.text2]}>Chen Chen</Text>
            </View>
        </View>
                
        );
    }
    

}
const styles = StyleSheet.create({
    splash:{
        backgroundColor:"black",
    },
    text1:{
        fontSize:30,
        color:'gray',
        
        
    },
    text2:{
        fontSize:40,
        color:'white'
    }


})
