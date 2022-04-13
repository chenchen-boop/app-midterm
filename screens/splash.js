import {StyleSheet,View,Button,Text,SafeAreaView,TouchableWithoutFeedback}from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import GlobalStyle from '../styles/global'
import * as Animatable from "react-native-animatable";
import { Ionicons } from '@expo/vector-icons';


export default class  Splash extends Component{
   
   
    
    componentWillMount(){
   
         setTimeout(()=>{this.props.navigation.navigate('Home');
         },8000)
    }
    render(){
        return(
            <View style={[GlobalStyle.container,styles.splash]}>
            
              
                <Animatable.View  animation="rotate" duration='1000' iterationCount='infinite' direction="alternate">
                    <Ionicons name="md-basketball-outline" size={100} color="black" />
                </Animatable.View> 
    
            </View> 
                
        );
    }
    

}
const styles = StyleSheet.create({
    splash:{
        backgroundColor:'#666666',
    }

})
