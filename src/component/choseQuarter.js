import {View,Text,Pressable,FlatList,StyleSheet,Alert}from 'react-native';
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectGame,selectWhichGame,setCurrentQuarter,setQuarterLastTime,setChangeQuarter} from '../redux/gameSlice';
import { useNavigation } from '@react-navigation/native';
const ChoseQuarter=()=>{
    const game=useSelector(selectGame);
    const whichGame=useSelector(selectWhichGame);
    const quarter=game[whichGame].CurrentQuarter;//1~8

    const choseQuarter=["第1節","第2節","第3節","第4節","OT1","OT2","OT3","OT4"];

    const setColor=(item)=>{
        let transItem;
        if(quarter<5)transItem='第'+quarter+'節';
        else transItem='OT'+(parseInt(quarter, 10)-4);
        // console.log(transItem);

        if(item==transItem) return('red');
        else return('white');
    };


    const dispatch=useDispatch();

    const navigation=useNavigation();

    return(
            <View style={styles.choseQuarterContainer}>
                <FlatList
                    //horizontal={true}
                    numColumns={4}
                    data={choseQuarter}
                    keyExtractor={() => Math.random().toString()}
                    renderItem={({item,index})=>
                        <View style={[styles.conBtn,{backgroundColor:setColor(item)}]}>
                            <Pressable onPress={()=>{
                                //  if((index+1)!=quarter&&)
                                Alert.alert("警告","確定要到"+item+"?",
                                    [{text:'確定',onPress:()=>{
                                        dispatch(setCurrentQuarter([whichGame,(index+1).toString()]));
                                        //setQuarter((index+1).toString());
                                        dispatch(setChangeQuarter([whichGame,true]));
                                        //dispatch(setQuarterLastTime([whichGame,'600']));
                                        // dispatch(setQuarterLastTime([whichGame,'600']));
                                    }},
                                    {text:'取消'}]);
                                
                            }}>
                                <Text style={styles.btnText}>{item}</Text>
                            </Pressable>

                            
                        </View>
                                                
                    }   

                /> 
                <View style={styles.endBtn}>
                    <Pressable onPress={()=>
                        Alert.alert("警告","確定要結束比賽?",
                        [{text:'確定',onPress:()=>{
                            dispatch(setCurrentQuarter([whichGame,'結束比賽']));
                            
                            dispatch(setChangeQuarter([whichGame,true]));
                            navigation.navigate('Manage');
                            
                        }},
                        {text:'取消'}])}>
                        <Text style={styles.btnText}>結束比賽</Text>
                    </Pressable> 
                </View>                             
            </View>
    

    );
};
export default ChoseQuarter;

const styles=StyleSheet.create({
    choseQuarterContainer:{
        //flexDirection:'row',
        //paddingLeft:230
        
       
        // marginLeft:200
        
       alignItems:'center',
    },
    conBtn:{
        width:150,
        height:100,
        borderWidth:2,
        marginBottom:20,
        marginRight:20,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    btnText:{
        fontSize:30
    },
    endBtn:{
        marginTop:100,
        width:300,
        height:100,
        borderWidth:2,
        borderRadius:75,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red'

    }
});
  