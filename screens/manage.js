import React, { Component } from 'react';
import {View,Button,Text, SafeAreaView, StyleSheet, TextInput}from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Manage=()=>{
    const navigation = useNavigation(); 
    
        console.log();
        return(
            <View>
                <Pressable>
                    <AntDesign name="plus" size={24} color="black" />
               </Pressable>
              
            </View>
             

        )
}   





export default Manage;