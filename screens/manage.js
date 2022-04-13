import {StyleSheet,View,Button,Text,SafeAreaView,Pressable,FlatList,Modal,TouchableWithoutFeedback, Keyboard}from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { Component } from 'react';
import{ useState } from 'react';
import {  TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import CreateRival from './createrival';


const Manage=()=>{
    const navigation = useNavigation(); 
    const [modalOpen, setModalOpen] = useState(false);

    const [Rival,setRival]=useState([
       {Date:'1/12',Type:'友誼',Name:'教育',key:'1'}
    ]);  
    const addRival=(Rival)=>{
        Rival.key=Math.random().toString();
        setRival((currentRivals)=>{
            return[ ...currentRivals,Rival];
        });
          setModalOpen(false);
    };
      

    
    return(
            
        <View>
            <View style={{flexDirection: "row",justifyContent: 'center'}}>
                    <Text style={{borderWidth:2 ,margin:20,fontSize:20}}>日期</Text>
                    <Text style={{borderWidth:2 ,margin:20,fontSize:20}}>性質</Text>
                    <Text style={{borderWidth:2 ,margin:20,fontSize:20}}>對手</Text>
                    <Text style={{borderWidth:2 ,margin:20,fontSize:20}}>數據控制</Text>
                    <Text style={{borderWidth:2 ,margin:20,fontSize:20}}>數據</Text>
            </View>
               

            <FlatList
                data={Rival}
                renderItem={({item})=>(
                    <View style={{flexDirection: "row" ,justifyContent: 'center',}}>
                        <Text style={{borderWidth:1 ,margin:20,fontSize:20,padding:10}}>{item.Date}</Text>
                        <Text style={{borderWidth:1 ,margin:20,fontSize:20,padding:10}}>{item.Type}</Text>
                        <Text style={{borderWidth:1 ,margin:20,fontSize:20,padding:10}}>{item.Name}</Text>
                        <Pressable  onPress={()=>navigation.navigate('Ready',item) } style={{borderWidth:1 ,margin:20,fontSize:20,padding:10,backgroundColor:'blue' ,borderRadius:4}} ><Text >數據控制</Text></Pressable>
                        <Pressable style={{borderWidth:1 ,margin:20,fontSize:20,padding:10,backgroundColor:'blue',borderRadius:4}}><Text>數據</Text></Pressable>
                    </View>
                )}
            />
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
                            <CreateRival addRival={addRival} />
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
    );
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







export default Manage;