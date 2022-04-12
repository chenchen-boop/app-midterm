import {StyleSheet,View,Button,Text,SafeAreaView,Pressable,FlatList,Modal,TouchableWithoutFeedback, Keyboard}from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { Component } from 'react';
import{ useState } from 'react';
import {  TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import CreatePlayer from './createplayer';

  

const Main=()=>{
    const navigation = useNavigation(); 
    const [modalOpen, setModalOpen] = useState(false);
    const [Number,setNumber]=useState('');
    const [Name,setName]=useState('');
    const [Height,setHeight]=useState('');
    const [Weight,setWeight]=useState('');

    const [Player,setPlayer]=useState([
        {Name:'albert', Number:'1',Height:170,Weight:60,key:1},
        {Name:'albert', Number:'1',Height:170,Weight:60,key:2},
        {Name:'albert', Number:'1',Height:170,Weight:60,key:3}
    ]);  

    const addPlayer=(player)=>{
        player.key=Math.random().toString();
        setPlayer((currentPlayers)=>{
            return[player, ...currentPlayers];
        });
        setModalOpen(false);
    }
      
    
   

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
            
        <FlatList
            data={Player}
            renderItem={({item})=>(
                <View style={{flexDirection: "row" ,justifyContent: 'center',}}>
                    <Text style={{borderWidth:1 ,margin:20,fontSize:20,padding:10}}>{item.Number}</Text>
                    <Text style={{borderWidth:1 ,margin:20,fontSize:20,padding:10}}>{item.Name}</Text>
                    <Text style={{borderWidth:1 ,margin:20,fontSize:20,padding:10}}>{item.Height}</Text>
                    <Text style={{borderWidth:1 ,margin:20,fontSize:20,padding:10}}>{item.Weight}</Text>
                </View>


            )}
        
        
        />
        
         {/* <Pressable onPress={()=>navigation.navigate('CreatePlayer')}>
                    <AntDesign name="plus" size={24} color="black" />
            </Pressable> */}


    <View>
        <Modal visible={modalOpen} animationType='slide'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
                <MaterialIcons 
                name='close'
                size={24} 
                style={{...styles.modalToggle, ...styles.modalClose}} 
                onPress={() => setModalOpen(false)} 
                />
                <CreatePlayer addPlayer={addPlayer} />
            </View>
            </TouchableWithoutFeedback>
        </Modal>
        <MaterialIcons 
            name='add' 
            size={24} 
            style={styles.modalToggle}
            onPress={() => setModalOpen(true)} 
        />
        
        
    </View>
</View>
    



    )










}
const styles = StyleSheet.create({
    modalToggle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#f2f2f2',
      padding: 10,
      borderRadius: 10,
      alignSelf: 'center',
    },
    modalClose: {
      marginTop: 20,
      marginBottom: 0,
    },
    modalContent: {
      flex: 1,
    }
  });







export default Main;