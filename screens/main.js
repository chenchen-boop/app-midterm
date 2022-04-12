import {StyleSheet,View,Button,Text,SafeAreaView,Pressable}from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { Component } from 'react';
import{ useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

  

const Main=()=>{
    const navigation = useNavigation(); 

    const [Number,setNumber]=useState('');
    const [Name,setName]=useState('');
    const [Height,setHeight]=useState('');
    const [Weight,setWeight]=useState('');
   

    return(
        <View>
            <View style={{alignItems:'center'}}>
                <View>
                     <Text>logo</Text>
                </View>
                <View>
                    <Text>國北數位</Text>
                </View>
                <View>
                      <Button title='管理球隊' onPress={()=>navigation.navigate('Manage')}/>
                    </View>
                
                <View>
                      <Text>------------------------------------------------------------------------------------------------------------------------------------------</Text>
                </View>
                <View>                             
                    <Text>球員名單</Text>
                </View>
        
                       
            </View>
            <View style={{flexDirection: "row",justifyContent: 'center'}}>
                    <Text style={{borderWidth:2 ,margin:20,fontSize:20}}>背號</Text>
                    <Text style={{borderWidth:2 ,margin:20,fontSize:20}}>姓名</Text>
                    <Text style={{borderWidth:2 ,margin:20,fontSize:20}}>身高</Text>
                    <Text style={{borderWidth:2 ,margin:20,fontSize:20}}>體重</Text>
                </View>
            <View style={{flexDirection: "row" ,justifyContent: 'center',}}>
                
                <TextInput
                    placeholder='number'
                    onChangeText={(text)=>setNumber(text)}
                    
                    keyboardType='numeric'
                    style={{borderWidth:2 ,margin:20,fontSize:20}}/>
                
                <TextInput
                    placeholder='name'
                    onChangeText={(text)=>setName(text)}
            
                    style={{borderWidth:2 ,margin:20,fontSize:20}}/>
                
                <TextInput
                    placeholder='height'
                    onChangeText={(text)=>setHeight(text)}
                    
                    keyboardType='numeric'
                    selectTextOnFocus={false}
                    style={{borderWidth:2 ,margin:20,fontSize:20}}/>
                
                <TextInput
                    placeholder='weight'
                    onChangeText={(text)=>setWeight(text)}
                    
                    keyboardType='numeric'
                    style={{borderWidth:2 ,margin:20,fontSize:20}}/>
               
                

            </View>
            <View style={{flexDirection: "row" ,justifyContent: 'center',}}>
                <Text>{Number}</Text>
                <Text>{Name}</Text>
                <Text>{Height}</Text>
                <Text>{Weight}</Text>
            </View>
            <Pressable onPress={()=>navigation.navigate('CreatePlayer')}>
                    <AntDesign name="plus" size={24} color="black" />
            </Pressable>
       </View>



    )










}






export default Main;