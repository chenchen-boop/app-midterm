import {StyleSheet,View,Button,Text,SafeAreaView,Pressable}from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { Component } from 'react';
import { TextInput } from 'react-native-gesture-handler';

// const count=0;



// const Main=()=>{

    



//     return(
//         <SafeAreaView>
//             <View>
//                 <Text>logo</Text>
//             </View>
//             <View>
//                 <Text>國北數位</Text>
//             </View>
//             <View>
//                 <Button title='管理球隊'/>
//             </View>
        
//             <View>
//                 <Text>----------------------------------------------------------------------------</Text>
//             </View>
//             <View>
//                 <Text>球員名單</Text>
//             </View>













//             <Pressable onPress={createNewRow}>
//                 <AntDesign name="plus" size={24} color="black" />
//             </Pressable>






//         </SafeAreaView>

//     );


// };



// const createNewRow=()=>{
//     return(
//         <View>
//         <Text>ddddddddddddddddddddddd</Text>
//         </View>
//     )

// }



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
            console.warn(this.state)
        }
        render(){
            return(
                <View>
                    <TextInput
                    placeholder='number'
                    onChangeText={(text)=>{this.setState({number:text})}}
                    style={{borderWidth:2 ,margin:20}}

                    
                    />
                     <TextInput
                    placeholder='name'
                    onChangeText={(text)=>{this.setState({name:text})}}
                    style={{borderWidth:2 ,margin:20}}

                    
                    />
                     <TextInput
                    placeholder='height'
                    onChangeText={(text)=>{this.setState({height:text})}}
                    style={{borderWidth:2 ,margin:20}}

                    
                    />
                     <TextInput
                    placeholder='weight'
                    onChangeText={(text)=>{this.setState({weight:text})}}
                    style={{borderWidth:2 ,margin:20}}

                    
                    />
                    <Button title='submit' onPress={()=>this.submit()}/>


                </View>




            );


        }







  }








export default Main;