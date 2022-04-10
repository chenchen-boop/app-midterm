import {StyleSheet,View,Button,Text,SafeAreaView,Pressable}from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { Component } from 'react';
import{ useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

//   const navigation = useNavigation(); 




  class Main extends React.Component{

    


        constructor(){
            super();
            this.state={
                number:'',
                name:'',
                height:'',
                weight:'',
              
            }


        }
        submit(){
            // console.warn(this.state);
            this.setState({name:this.state.number++});
            
        }
        render(){

           
            return(
                <View >
                    <View style={{alignItems:'center'}}>
                        <View>
                            <Text>logo</Text>
                        </View>
                        <View>
                            <Text>國北數位</Text>
                        </View>
                        <View>
                            <Button title='管理球隊' onPress={()=>this.props.navigation.navigate('Manage')}/>
                        </View>
                        
                        <View>
                             <Text>------------------------------------------------------------------------------------------------------------------------------------------</Text>
                        </View>
                        <View>
                            <Text>球員名單</Text>
                        </View>
        
                       
                    </View>
                    <View style={{flexDirection: "row" ,justifyContent: 'center',}}>
                        <TextInput
                        placeholder='number' 
                        onChangeText={(text)=>{this.setState({number:text})}}
                        style={{borderWidth:2 ,margin:20,fontSize:20}}

                        
                        />
                        <TextInput
                        placeholder='name'
                        onChangeText={(text)=>{this.setState({name:text})}}
                        style={{borderWidth:2 ,margin:20,fontSize:20}}

                        
                        />
                        <TextInput
                        placeholder='height'
                        onChangeText={(text)=>{this.setState({height:text})}}
                        style={{borderWidth:2 ,margin:20,fontSize:20}}

                        
                        />
                        <TextInput
                        placeholder='weight'
                        onChangeText={(text)=>{this.setState({weight:text})}}
                        style={{borderWidth:2 ,margin:20,fontSize:20}}

                        
                        />

                        <Pressable style={{ borderRadius: 4,margin:20,backgroundColor: 'blue',}} onPress={()=>this.submit()}>
                            <Text  style={{fontSize:20}}>submit</Text>
                        </Pressable>

                        <Text>{this.state.number}</Text>


                        

                    </View>
                    <Pressable style={{alignItems:'center'}}>
                            <AntDesign name="plus" size={24} color="black" />
                    </Pressable>


                </View>

            );


        }







  }








export default Main;