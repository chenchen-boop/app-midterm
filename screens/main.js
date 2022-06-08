import {StyleSheet,View,Button,Text,SafeAreaView,Pressable,FlatList,Modal,TouchableWithoutFeedback, Keyboard,Image,ScrollView} from 'react-native';
import React, { Component, useEffect } from 'react';
import{ useState } from 'react';
import {  TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import CreatePlayer from './createplayer';
import GlobalStyle from '../styles/global';
import { useDispatch, useSelector } from "react-redux";
import { selectPlayer ,del} from '../src/redux/playerSlice';
import { selectModal,setCreatePlayerModalOpen } from '../src/redux/settingSlice';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { AntDesign } from '@expo/vector-icons';
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
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>管理球隊</Text>
                    </View>
                </Pressable>
                
                <View>
                      <Text>------------------------------------------------------------------------------------------------------------------------------------------</Text>
                </View>
                <View>                             
                    <Text style={{fontSize:30}}>球員名單</Text>
                </View>
        
                       
            </View>
            <View style={styles.titleRow}>
                <View style={styles.titleBox}><Text style={styles.text}>背號</Text></View>
                <View style={styles.titleBox}><Text style={styles.text}>姓名</Text></View> 
                <View style={styles.titleBox}><Text style={styles.text}>身高 (cm)</Text></View>   
                <View style={styles.titleBox}><Text style={styles.text}>體重 (kg)</Text></View>     
                    
                    
                    
            </View>
            <View>
                    <MaterialIcons 
                        name='add' 
                        size={24} 
                        style={styles.modalToggle}
                        onPress={() => dispatch(setCreatePlayerModalOpen(true))} 
                    /> 
            </View>
                <FlatList
                   
                    style={{marginBottom:100}}
                    data={player}
                    renderItem={({item})=>(
            
                        <View style={styles.itemRow}>
                            <View style={styles.itemBox}>
                                <Text style={styles.text}>{item.Number}</Text>
                            </View>
                            <View style={styles.itemBox}>
                                <Text style={styles.text}>{item.Name}</Text>
                            </View>
                            <View style={styles.itemBox}>
                                <Text style={styles.text}>{item.Height}</Text>
                            </View>
                            <View style={styles.itemBox}>
                                <Text style={styles.text}>{item.Weight}</Text>
                            </View>
                            
                            
                            <Pressable onPress={()=>dispatch(del(item.key))}>
                            {/* <Pressable onPress={()=>console.log(item.key)}> */}
                                <AntDesign name="delete" size={40} color="black" />
                            </Pressable>    
                        </View>
                        
                
                    )}
        
                />
           
        

                <View >
                    <Modal visible={modal.createPlayerModalOpen} animationType='slide'>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={styles.modalContent}>
                                <MaterialIcons 
                                name='close'
                                size={24} 
                                style={{...styles.modalToggle, ...styles.modalClose}} 
                                onPress={() => dispatch(setCreatePlayerModalOpen(false))} 
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
        height:1100,
        //backgroundColor:'#f5deb3'
        // backgroundColor:'gray'
        backgroundColor:'#FFE4C4'
    },
    btn:{
        borderWidth:1,
        backgroundColor:'#00008B',
        borderRadius:40,
        width:400,
        justifyContent:'center',
        alignItems:'center',
        // opacity:0.7,

    },
    btnText:{
        fontSize:40,
        color:'white'
    },
    titleBox:{
        width:100,
        borderWidth:1 ,
        margin:20,
        paddingVertical:10,
        alignItems:'center',
        justifyContent:'center'

    },
    titleRow:{
        
        flexDirection: "row",
        justifyContent: 'center',
        alignItems:'center',
    },
    text:{
        fontSize:20,
    },
    itemRow:{
        backgroundColor:'gray',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row',
        //marginBottom:20,
        //borderRadius:10,
        paddingVertical:10,
        borderWidth:1,
        
        
    },
    itemBox:{
        width:100,
        //borderWidth:1 ,
        justifyContent:'center',
        alignItems:'center',
        //padding:10,
        marginHorizontal:20,
        // marginBottom:20

    },
    

    modalToggle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 1,
    //   borderColor: '#f2f2f2',
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
      backgroundColor:"#ffffe0",
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
       // color:'white'
    }
  });

export default Main;





