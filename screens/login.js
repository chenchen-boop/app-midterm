import React  from "react";
import {View,Button,Text, SafeAreaView, StyleSheet, TextInput,Pressable}from 'react-native'
import { useNavigation } from '@react-navigation/native';
import GlobalStyle from '../styles/global'

const Login=()=>{

    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    const navigation = useNavigation(); 
    return(
    <View style={[GlobalStyle.container,styles.backgroundColor]}>
        
        <View >
            <Text style={styles.text} >帳號</Text>
            <TextInput
            
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="隨意"
            />
        </View>
        <View styles={{flexDirection: "row" }}>
            <Text style={styles.text}>密碼</Text>
            <TextInput
           style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="字母"
            keyboardType="numeric"
            />
        </View>
        
        <Pressable onPress={()=>navigation.navigate('Main')}  style={GlobalStyle.btn}>
              <Text style={GlobalStyle.text}>送出</Text>
        </Pressable>
    </View>
    );



};

const styles = StyleSheet.create({
    input: {
        color:'black',
        height: 60,
        width:300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize:34
    },
    text: {
        color: "white",
        fontSize: 30,
        // lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
        margin:20,
        borderRadius:10,
        paddingHorizontal:70,   
        fontFamily: 'serif',
        fontWeight:'normal'
      
        
      },
      btn:{
        color: "white",
        fontSize: 42,
        // lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#3399ff",
        margin:20,
        borderRadius:10,
        paddingHorizontal:70,
        fontFamily: 'serif',
        fontWeight:'bold'
      },
      backgroundColor:{
          backgroundColor:'gray'
      }
  });
export default Login;