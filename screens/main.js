import {StyleSheet,View,Button,Text,SafeAreaView,Pressable,FlatList,Modal,TouchableWithoutFeedback, Keyboard,Image,ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { Component, useEffect } from 'react';
import{ useState } from 'react';
import {  TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import CreatePlayer from './createplayer';
import GlobalStyle from '../styles/global';
import { useDispatch, useSelector } from "react-redux";
import { selectPlayer } from '../src/redux/playerSlice';
import { selectModal,setModalOpen } from '../src/redux/settingSlice';

const Main=()=>{
    const navigation = useNavigation();

    const modal=useSelector(selectModal);
    // const {modalOpen}=useSelector((state)=>state.setting.modal);
    //const [ModalOpen, setmodalopen] = useState(modal.modalOpen);
    
    const player=useSelector(selectPlayer);
    const dispatch=useDispatch();
    //const player=useSelector(selectPlayer);
    
    //const [Player,setPlayer]=useState(player);
     
    
    //    [
    //     {Name:'高高高', Number:'4',Height:180,Weight:60,key:4},
    //     {Name:'黃凱峻', Number:'3',Height:170,Weight:60,key:3},
    //     {Name:'呂修一', Number:'2',Height:200,Weight:40,key:2},
    //     {Name:'簡伯松', Number:'1',Height:170,Weight:65,key:1},
    //    ]
       
   
    //    useEffect(()=>{
    // // // // //  dispatch(setPlayerInfo({name,number,height,weight}));
    // //       console.log(Player);
    // // // // },[player]);
    // // // // useEffect(()=>{
    //      console.log(ModalOpen);
    //     dispatch(setModalOpen(ModalOpen));
        
    //    },[ModalOpen]);


    // const addPlayer=(newplayer)=>{
    //     newplayer.key=Math.random().toString();
    //     setPlayer((currentPlayers)=>{
    //         return[ newplayer,...currentPlayers];
    //     });
    //       setModalOpen(false);
    // };
      
    

    return(
        <View style={styles.container}>

            <View style={{alignItems:'center'}}>
                <View>
                     
                     <Image source={require('../src/img/4.png')} style={{width:120, height:110}}/>
                </View>    
                <View>
                    <Text style={styles.title}>國北丙籃</Text>
                </View>
                {/* <View>
                      <Button title='管理球隊' onPress={()=>navigation.navigate('Manage')}/>
                </View> */}
                <Pressable onPress={()=>navigation.navigate('Manage')}>
                    <View style={GlobalStyle.btn}>
                        <Text style={GlobalStyle.text}>管理球隊</Text>
                    </View>
                </Pressable>
                
                <View>
                      <Text>------------------------------------------------------------------------------------------------------------------------------------------</Text>
                </View>
                <View>                             
                    <Text style={styles.text}>球員名單</Text>
                </View>
        
                       
            </View>
            <View style={{flexDirection: "row",justifyContent: 'center'}}>
                    <Text style={{borderWidth:1 ,margin:20,fontSize:20,padding:10,paddingHorizontal:20}}>背號</Text>
                    <Text style={{borderWidth:1 ,margin:20,fontSize:20,padding:10,paddingHorizontal:20}}>姓名</Text>
                    <Text style={{borderWidth:1 ,margin:20,fontSize:20,padding:10}}>身高 (cm)</Text>
                    <Text style={{borderWidth:1 ,margin:20,fontSize:20,padding:10}}>體重 (kg)</Text>
            </View>
            <View>
                    <MaterialIcons 
                        name='add' 
                        size={24} 
                        style={styles.modalToggle}
                        onPress={() => dispatch(setModalOpen(true))} 
                     /> 
            </View>
                <FlatList
                   
                    style={{marginBottom:100}}
                    data={player}
                    renderItem={({item})=>(
                        <View  >
                            <View style={{justifyContent: 'center',flexDirection:'row'}}>
                                <Text style={{borderWidth:1 ,fontSize:20,padding:10,marginHorizontal:30,marginBottom:10}}>{item.Number}</Text>
                                <Text style={{borderWidth:1 ,fontSize:20,padding:10,marginHorizontal:30,marginBottom:10}}>{item.Name}</Text>
                                <Text style={{borderWidth:1 ,fontSize:20,padding:10,marginHorizontal:30,marginBottom:10}}>{item.Height}</Text>
                                <Text style={{borderWidth:1 ,fontSize:20,padding:10,marginHorizontal:30,marginBottom:10}}>{item.Weight}</Text>
                                
                            </View>
                        </View>
                   


                    )}
                
                
                />
           
        

                <View>
                    <Modal visible={modal. modalOpen} animationType='slide'>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={styles.modalContent}>
                                <MaterialIcons 
                                name='close'
                                size={24} 
                                style={{...styles.modalToggle, ...styles.modalClose}} 
                                onPress={() => dispatch(setModalOpen(false))} 
                                />
                                {/* <CreatePlayer addPlayer={addPlayer} /> */}
                                <CreatePlayer/>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                    
                </View>
        </View>
    
    );

    
};

const styles = StyleSheet.create({
    container:{
        padding:50,
        height:1100
        // backgroundColor:'gray'
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
    title:{
        color: "black",
        fontFamily: 'serif',
        fontWeight:'bold',
        fontSize:70,
        marginTop:30,
        marginBottom:30,
        letterSpacing:20,

    },
    text:{
        fontSize:20,
        fontFamily: 'serif',
        fontWeight:'bold',
        color: "black",
    }
  });

export default Main;





