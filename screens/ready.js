import React from 'react';
import { View ,Text,StyleSheet,Pressable,Alert} from "react-native";
import GlobalStyle from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import { addStats } from '../src/redux/playerSlice';
import {selectWhichGame}from '../src/redux/gameSlice';

const Ready=({route})=>{
    const navigation=useNavigation();
    const { Date,Name,Type } = route.params;
    const dispatch=useDispatch();
    const whichGame=useSelector(selectWhichGame);
    return(
        <View style={GlobalStyle.container} >
           
           
            <Text style={[GlobalStyle.text,styles.text]}>{Type}</Text>
            <Text style={[GlobalStyle.title,styles.title]}>國北丙籃</Text>
            <Text style={[GlobalStyle.text,styles.MainText]}>VS</Text>
            <Text style={[GlobalStyle.text,styles.text,styles.redtext]}>{Name}</Text>
            <Text style={[GlobalStyle.text,styles.MainText]}>{Date}</Text>
            <Pressable onPress={()=>{
                navigation.navigate('RecordGame');
                dispatch(addStats());
                console.log(whichGame);
                }}>
                <Text style={[GlobalStyle.text,GlobalStyle.btn]} >記錄自己數據</Text>
            </Pressable>
            <Pressable 
                
                onPress={()=>Alert.alert('comming soon')}>
                <Text style={[GlobalStyle.text,GlobalStyle.btn]}>記錄兩隊數據</Text>
            </Pressable >
            
            
        </View>

    )

}
export default Ready;

const styles = StyleSheet.create({
    MainText:{
        color:'black',
        fontSize:40,
        margin:40
    },
    title:{
        color:'#000099',
        fontSize:60,
        marginTop:0,
        marginBottom:30,
        letterSpacing:20,
    },
    text:{
        fontSize:40,
        color:'black',
        
    },
    redtext:{
        color:'red'
    }



})