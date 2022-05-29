import {StyleSheet,View,Button,Text,SafeAreaView,Pressable,FlatList,Modal,TouchableWithoutFeedback, Keyboard,Alert}from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { Component } from 'react';
import{ useState } from 'react';
import {  TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import CreateRival from './createrival';
import GlobalStyle from '../styles/global';
import { useDispatch, useSelector } from "react-redux";
import { selectGame, setWhichGame } from '../src/redux/gameSlice';
import {setCreateGameModalOpen,selectModal} from '../src/redux/settingSlice';
//import { selectModal,setModalOpen } from '../src/redux/settingSlice';



const Manage=()=>{
    const navigation = useNavigation(); 
    //const [modalOpen, setModalOpen] = useState(false);
    const modal=useSelector(selectModal);
    // const [Rival,setRival]=useState([
    //    {Date:'4/16',Type:'友誼賽',Name:'教育系',key:'1'}
    // ]);  
    const game=useSelector(selectGame);
    const dispatch=useDispatch();

    // const addRival=(Rival)=>{
    //     Rival.key=Math.random().toString();
    //     setRival((currentRivals)=>{
    //         return[ Rival,...currentRivals];
    //     });
    //       setModalOpen(false);
    // };
      

    
    return(
            
        <View style={styles.container}>
            <View style={{flexDirection: "row",justifyContent: 'space-around'}}>
                    <Text style={styles.itemTitle}>日期</Text>
                    <Text style={styles.itemTitle}>性質</Text>
                    <Text style={styles.itemTitle}>對手</Text>
                    <Text style={styles.itemTitle}>單節時間</Text>
                    <Text style={styles.itemTitle}>數據控制</Text>
                    <Text style={styles.itemTitle}>數據</Text>
            </View>
            <MaterialIcons 
                    name='add' 
                    size={24} 
                    style={styles.modalToggle}
                    onPress={() =>dispatch(setCreateGameModalOpen(true))} 
                />

            <FlatList
                data={game}
                renderItem={({item})=>(
                    <View style={{flexDirection: "row" ,justifyContent: 'space-around',}}>
                        <Text style={styles.item}>{item.Date}</Text>
                        <Text style={styles.item}>{item.Type}</Text>
                        <Text style={styles.item}>{item.Name}</Text>
                        <Text style={styles.item}>{item.Time}</Text>
                        <Pressable  onPress={()=>{
                            navigation.navigate('Ready',item);
                            dispatch(setWhichGame(item.key));

                        }} 
                            style={[GlobalStyle.btn,styles.btn]} >
                            <Text  style={GlobalStyle.text}>數據控制</Text>
                        </Pressable>
                        <Pressable onPress={()=>Alert.alert("Comming Soon")} style={[GlobalStyle.btn,styles.btn]}>
                            <Text  style={GlobalStyle.text}>數據</Text>
                        </Pressable>
                    </View>
                )}
            />
            <View>
                <Modal visible={modal.createGameModalOpen} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.modalContent}>
                            <MaterialIcons 
                            name='close'
                            size={24} 
                            style={{...styles.modalToggle, ...styles.modalClose}} 
                            onPress={() => dispatch(setCreateGameModalOpen(false))} 
                            />
                            {/* <CreateRival addRival={addRival} /> */}
                            <CreateRival/>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
                
            </View>
           
        </View>
    );
}  


const styles = StyleSheet.create({
    container:{
        // width:500,
        flex:1,
        paddingHorizontal:50,
        paddingTop:50,
        paddingBottom:200,
        height:1100,
        // width:500,
    },
    itemTitle:{
        // width:100,
        borderWidth:1 ,
        margin:20,
        fontSize:20,
        padding:10,
        // paddingHorizontal:20
    },
    item:{
        // width:100,
        borderWidth:1 ,
        margin:20,
        fontSize:20,
        padding:10,
        marginHorizontal:30
    },
    btn:{
        paddingHorizontal:16
    },
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
    },
    
  });







export default Manage;