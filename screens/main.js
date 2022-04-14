import {StyleSheet,View,Button,Text,SafeAreaView,Pressable,FlatList,Modal,TouchableWithoutFeedback, Keyboard,Image,ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { Component } from 'react';
import{ useState } from 'react';
import {  TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import CreatePlayer from './createplayer';
import GlobalStyle from '../styles/global'

  

const Main=()=>{
    const navigation = useNavigation(); 
    const [modalOpen, setModalOpen] = useState(false);
    

    const [Player,setPlayer]=useState([
      
        {Name:'呂修一', Number:'2',Height:170,Weight:60,key:2},
        {Name:'簡伯松', Number:'1',Height:160,Weight:50,key:1},
       
    ]);  

    const addPlayer=(player)=>{
        player.key=Math.random().toString();
        setPlayer((currentPlayers)=>{
            return[ player,...currentPlayers];
        });
          setModalOpen(false);
    };
      
    

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
                        onPress={() => setModalOpen(true)} 
                     /> 
            </View>
                <FlatList
                    style={{marginBottom:100}}
                    data={Player}
                    renderItem={({item})=>(
                        <View  >
                            <View style={{justifyContent: 'center',flexDirection:'row'}}>
                                <Text style={{borderWidth:1 ,margin:20,fontSize:20,padding:10,marginHorizontal:30}}>{item.Number}</Text>
                                <Text style={{borderWidth:1 ,margin:20,fontSize:20,padding:10,marginHorizontal:30}}>{item.Name}</Text>
                                <Text style={{borderWidth:1 ,margin:20,fontSize:20,padding:10,marginHorizontal:30}}>{item.Height}</Text>
                                <Text style={{borderWidth:1 ,margin:20,fontSize:20,padding:10,marginHorizontal:30}}>{item.Weight}</Text>
                                
                            </View>
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
                                <CreatePlayer addPlayer={addPlayer} />
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





