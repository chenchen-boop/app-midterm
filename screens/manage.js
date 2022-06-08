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
import { selectGame, setWhichGame,delGame,selectWhichGame } from '../src/redux/gameSlice';
import {setCreateGameModalOpen,selectModal} from '../src/redux/settingSlice';
//import { selectModal,setModalOpen } from '../src/redux/settingSlice';
import EachGameStats from '../src/component/eachGameStats';


const Manage=()=>{
    const navigation = useNavigation(); 
    //const [modalOpen, setModalOpen] = useState(false);
    const modal=useSelector(selectModal);
    const whichGame=useSelector(selectWhichGame);
    const [statsModal,setStatsModal]=useState(false);
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
            <View style={styles.titleContainer}>
                <View style={styles.titleBox}><Text style={styles.text}>日期</Text></View>
                <View style={styles.titleBox}><Text style={styles.text}>性質</Text></View>
                <View style={styles.titleBox}><Text style={styles.text}>對手</Text></View>
                <View style={styles.titleBox}><Text style={styles.text}>單節時間</Text></View>
                <View style={styles.titleBox}><Text style={styles.text}>數據控制</Text></View>
                <View style={styles.titleBox}><Text style={styles.text}>數據</Text></View>
                    
                    
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
                    <View style={styles.itemRow}>
                        <View style={styles.itemBox}><Text style={styles.text}>{item.Date}</Text></View>
                        <View style={styles.itemBox}><Text style={styles.text}>{item.Type}</Text></View>
                        <View style={styles.itemBox}><Text style={styles.text}>{item.Name}</Text></View>
                        <View style={styles.itemBox}><Text style={styles.text}>{item.Time/60}</Text></View>
                        <View>
                            <Pressable  onPress={()=>{
                                navigation.navigate('Ready',item);
                                dispatch(setWhichGame(item.key)); //唯二能setWhichGame的地方
                                //console.log(whichGame);

                            }} 
                                style={styles.btn} >
                                <Text  style={[styles.text,{color:'white'}]}>數據控制</Text>
                        </Pressable>
                        </View>
                        <View style={[styles.btn,{backgroundColor:'green'	}]}>
                            <Pressable onPress={()=>{
                                setStatsModal(true);
                                dispatch(setWhichGame(item.key)); //唯二能setWhichGame的地方
                                }}
                                >
                                <Text  style={[styles.text,{color:'white'}]}>數據</Text>
                            </Pressable>
                        </View>
                        
                        <View>
                            <Pressable onPress={()=>dispatch(delGame(item.key))}>
                                <AntDesign name="delete" size={40} color="black" />
                            </Pressable>
                        </View>
                        
                        
                        
                        
                        
                    </View>
                )}
            />
            <View>
                

                <Modal visible={modal.createGameModalOpen||statsModal} animationType='slide'>
                
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {(()=>{
                        if(modal.createGameModalOpen){
                            return(
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
                            )
                        }
                        else{
                            return(
                                <View style={styles.modalContent}>
                                    <MaterialIcons 
                                    name='close'
                                    size={24} 
                                    style={{...styles.modalToggle, ...styles.modalClose}} 
                                    onPress={() =>{setStatsModal(false)}} 
                                    />
                                    
                                    <EachGameStats/>  
                                </View>

                            )
                        }
                    })()
                    }
                    
                        
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
        paddingBottom:100,
        // height:1300,
        backgroundColor:'#FFE4C4'
        // width:500,
    },
    titleContainer:{
        flexDirection:'row',
        //justifyContent:'space-around',
        padding:20,
        marginBottom:10,

    },
    titleBox:{
        width:100,
        borderWidth:1 ,
        paddingVertical:10,
        justifyContent:'center',
        alignItems:'center',
        
    },
    text:{
        fontSize:20,
        color:'black'
    },


    itemRow:{
        flexDirection:'row',
        backgroundColor:'gray',
        justifyContent: 'space-around',
        alignItems:'center',
        
        //marginHorizontal:20,
        marginBottom:20,
        
        
        borderWidth:1,
        
    },
    itemBox:{
        alignItems:'center',
        justifyContent:'center',
        width:100,
        //borderWidth:1 ,
        paddingVertical:20
    
        // height:60,
        
        
        //marginHorizontal:20
    },
    btn:{
        paddingHorizontal:16,
        backgroundColor:'#00008B',
        borderRadius:20,
        paddingVertical:20
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
    
  });







export default Manage;