import React from "react";
import {View,Button,Text, SafeAreaView, StyleSheet, TextInput}from 'react-native'

const Login=()=>{

    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
  
    return(
    <SafeAreaView>
        <View >
            <Text>帳號</Text>
            <TextInput
            style={styles.input}
            // onChangeText={onChangeText}
            value={text}
            />
        </View>
        <View>
            <Text>密碼</Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
            />
        </View>
        <Button title='送出'></Button>

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