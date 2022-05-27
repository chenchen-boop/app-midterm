import { selectPlayer,setPlayer } from "../src/redux/playerSlice";
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import {View,Text,FlatList, StyleSheet}from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GlobalStyle from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons'; 
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
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
    // useEffect(()=>{
    //     dispatch()

    // },[Starter]);



    return(
        <View >
            <FlatList
               
                data={player}
                renderItem={({item})=>
                <View style={[styles.cardContainer,{backgroundColor:setStarterColor(item.Starter)}]}>
                    <Pressable onPress={()=>{
                        if(item.Starter)dispatch(setPlayer(item.key));
                        else dispatch(setPlayer(item.key));
                        console.log(item.key);
                        
                    }}> 
                        <MaterialIcons name="tag-faces" size={60} color="black" />
                        <Text>{item.Number}</Text>  
                        <Text>{item.Name}</Text>    
                    </Pressable>
                </View>
                
                }
                horizontal={true}
                
            
            
            />
            {/* <Text>{player[0].Name}</Text> */}
        </View>
       



    );




};



const styles=StyleSheet.create({
    card:{
        
        
    },
    cardContainer:{
       // flexDirection:"row"
        width:150,
        height:150,
        borderWidth:3,
        borderRadius: 30,
        marginRight:50,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:bgColor
    }







});






export default Starter;