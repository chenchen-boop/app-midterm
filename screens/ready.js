import React from 'react';
import { View ,Text,StyleSheet,Pressable,Alert,ImageBackground,Image} from "react-native";
import GlobalStyle from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import { addStats } from '../src/redux/playerSlice';
import {selectWhichGame}from '../src/redux/gameSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Ready=({route})=>{
    const navigation=useNavigation();
    const { Date,Name,Type } = route.params;
    const dispatch=useDispatch();
    const whichGame=useSelector(selectWhichGame);
    return(
        <View style={styles.container} >
            <ImageBackground  source={require('../src/img/readyBG1.jpg')} style={styles.image}   resizeMode='cover'>
                
                <View style={{flexDirection:'row',paddingHorizontal:60,}}>
                    <View style={[styles.teamBox,{flexDirection:'column'} ]}>
                        <View style={{marginBottom:30}}>
                            <Text style={styles.teamText}>國北丙籃</Text>
                        </View>
                        <Image source={require('../src/img/4.png')} style={{width:140, height:140}}/>
                    </View>

                    <View style={styles.middleContainer}>
                        <View style={styles.typeBox}>
                            <Text style={styles.typeText}>{Type}</Text>
                        </View>

                        <View style={styles.dateBox}>
                            <Text style={styles.dateText}>{Date}</Text>
                        </View>
                    </View>

                    <View style={styles.teamBox}>
                            <Text style={[styles.teamText,styles.redtext]}>{Name}</Text>
                            <MaterialCommunityIcons name="baby-face" size={140} color="#dcdcdc" />
                    </View>
                    
                </View>
                
                
                <View style={[styles.btn,{backgroundColor:'#00008B',}]}>
                        <Pressable onPress={()=>{
                            navigation.navigate('RecordGame');
                            dispatch(addStats());
                            console.log(whichGame);
                            }}>
                            <Text style={styles.btnText}>記錄自己數據</Text>
                        </Pressable>
                </View>

                <View style={styles.btn}>
                        <Pressable 
                        
                            onPress={()=>Alert.alert('comming soon')}>
                            <Text style={[styles.btnText,{color:'black'}]}>記錄兩隊數據</Text>
                        </Pressable >
                </View>
        
            
           </ImageBackground>
        </View>

    )

}
export default Ready;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FFE4C4',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    typeBox:{

    },
    typeText:{
        fontSize:40,
        color:'white'
    },
    dateBox:{
        
    },
    dateText:{
        fontSize:40,
        color:'white'
    },
    teamBox:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        marginTop:150
    },
    teamText:{
        fontSize:70,
        color:'white'
    },

    MainText:{
        color:'black',
        fontSize:40,
        margin:40
    },
    title:{
        color:'#000099',
        fontSize:60,
        marginTop:0,
        marginBottom:30,
        letterSpacing:20,
    },
    text:{
        fontSize:40,
        color:'black',
        
    },
    redtext:{
        //color:'red'
    },
    image:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        
    } ,
    btn:{
        backgroundColor: "#dcdcdc",
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:50,
        paddingVertical:10,
        marginBottom:10,

    },
    btnText:{
        fontSize:40,
        color:'white'
    },
    middleContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        bottom:100,
    }



})