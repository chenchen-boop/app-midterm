import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import {View,Text,FlatList, StyleSheet,Pressable,Button,Modal,TouchableWithoutFeedback, Keyboard,}from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GlobalStyle from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons'; 
import { selectPlayer,setPlayer,addStats} from "../src/redux/playerSlice";
import { setGame } from "../src/redux/gameSlice";
import { TextInput } from "react-native-gesture-handler";
import RecordGame from "./recordGame";


const Starter=()=>{
    const navigation = useNavigation();
    const player=useSelector(selectPlayer);
    //const [Starter, setStarter] = useState(player.Starter);
    const starterColor='';
    const setStarterColor=(itemStarter)=>{
        if(itemStarter) return('red');
        else return('white');
        
    };
    const dispatch=useDispatch();
    
    const [ModalOpen, setModalOpen] = useState(false);
    // useEffect(()=>{
    //     dispatch(setGame())
    
    //     },[ModalOpen]);


    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <FlatList
                    
                    numColumns={4}
                    data={player}
                    keyExtractor={item=>item.key}
                    renderItem={({item})=>
                    <View style={[styles.cardContainer,{backgroundColor:setStarterColor(item.Starter)}]}>
                        <Pressable onPress={()=>{
                            if(item.Starter)dispatch(setPlayer(item.key));
                            else dispatch(setPlayer(item.key));
                            //console.log(item.key);
                            
                        }}> 
                            <MaterialIcons name="tag-faces" size={60} color="black" />
                            <Text>{item.Number}</Text>  
                            <Text>{item.Name}</Text>    
                        </Pressable>
                    </View>
                    
                    }
                    // horizontal={true}
                    
                
                
                />
            {/* <Text>{player[0].Name}</Text> */}
            </View>
            <View style={styles.rightContainer}>
                <Button title="開始比賽" 
                onPress={()=>{
                    dispatch(addStats());
                    navigation.navigate('RecordGame');
                    
                    }
                }/>
                {/* <Button title="比賽時間" onPress={()=>setModalOpen(true)}/> */}
                <Button title="管理球員"/>
                
                






            </View>
            {/* <View>
                    <Modal visible={ModalOpen} animationType='slide'>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={styles.modalContent}>
                                <MaterialIcons 
                                name='close'
                                size={24} 
                                style={{...styles.modalToggle, ...styles.modalClose}} 
                                onPress={() => setModalOpen(false)} 
                                />
                                <TextInput 
                                    placeholder="Time"
                                    onChangeText={dispatch(setGame(0,))}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                    
                </View> */}

        </View>

       



    );




};



const styles=StyleSheet.create({
    container:{
       // width:1000,
        flex:1,
        padding:20,
        flexDirection:"row",
        
    
    },
    leftContainer:{
        
        flex:3,
        width:100,
        // flexDirection:'row',
        flexWrap:'wrap',
      

        
    },
    rightContainer:{
        flex:1,
    },
    card:{
        
        
    },
    cardContainer:{
       // flexDirection:"row"
        width:150,
        height:150,
        marginBottom:30,
        borderWidth:3,
        borderRadius: 30,
        marginRight:50,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:bgColor
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






export default Starter;