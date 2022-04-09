import React  from "react";
import {View,Button,Text, SafeAreaView, StyleSheet, TextInput}from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Login=()=>{

    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    const navigation = useNavigation(); 
    return(
    <SafeAreaView>
        <View >
            <Text>帳號</Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="albert"
            />
        </View>
        <View>
            <Text>密碼</Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="12345678"
            keyboardType="numeric"
            />
        </View>
        <Button title='送出' onPress={()=>navigation.navigate('Main')}/>

    </SafeAreaView>
    );



};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
export default Login;