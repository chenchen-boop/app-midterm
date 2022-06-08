import React  from "react";
import {View,Button,Text, SafeAreaView, StyleSheet, TextInput,Pressable,TouchableWithoutFeedback,Keyboard,ImageBackground}from 'react-native'
import { useNavigation } from '@react-navigation/native';
import GlobalStyle from '../styles/global'

const Login=()=>{

    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    const navigation = useNavigation(); 
    return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
        <View style={[styles.container,styles.backgroundColor]}>
            <ImageBackground  source={require('../src/img/loginBg.jpg')} style={styles.image}   resizeMode='contain'>
                <View style={{alignItems:'center'}}>
                
                    {/* <View > 
                        <Text style={styles.text} >帳號</Text>
                    </View>  */}
                    <TextInput
                        style={[styles.input,{marginTop:500}]}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="帳號"
                        />
                

                
                    {/* <View>
                        <Text style={styles.text}>密碼</Text>
                    </View> */}
                    
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="密碼"
                        keyboardType="numeric"
                    />
                
                    <View style={styles.btn}>
                        <Pressable onPress={()=>navigation.navigate('Main')}  >
                            <Text style={styles.text}>送出</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
        
    </TouchableWithoutFeedback>
    );



};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        
    },
    input: {
        backgroundColor:'white',
        color:'black',
        height: 60,
        width:500,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize:34,
        borderRadius:30,
        opacity: 0.7
        
    },
    text: {
        color: "white",
        fontSize: 34,
        fontWeight: "bold",
        fontFamily: 'serif',
        fontWeight:'normal'
      
      },
    btn:{
        backgroundColor:'blue',
        height: 80,
        width:500,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center'

      },
      backgroundColor:{
          backgroundColor:'black'
      },
      image:{
        flex: 1,
        justifyContent: "center",
      } ,
  });
export default Login;