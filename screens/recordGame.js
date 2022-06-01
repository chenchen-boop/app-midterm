import React,{ useState } from 'react';
import {View,Text,StyleSheet,FlatList,Pressable,Image,Button} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { selectPlayer,setClickPlayer ,setTwoPoint,setThreePoint,setFreeThrow,setRebound,setFoul,setAssist,setSteal,setTurnOver,setBlock} from '../src/redux/playerSlice';
import {selectGame,selectWhichGame} from '../src/redux/gameSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';




const RecordGame=()=>{
    //var TimerMixin = require('react-timer-mixin'); 
    
    const player=useSelector(selectPlayer);
    const game=useSelector(selectGame);
    const whichGame=useSelector(selectWhichGame);
    const dispatch=useDispatch();
    
    const setClickColor=(itemClick)=>{
        if(itemClick) return('red');
        else return('white');
        
    };
    const [itemClick,setItemClick]=useState(false);//是否有player被click
    const [itemClickKey,setItemKeyClick]=useState(null);
   
    const [statsClick,setStatsClick]=useState([ false,false,false,false,
                                                false,false,false,false,
                                                false,false,false,false,
                                                false,false,]);
   

    const updateStatsClick=(Stats,i)=>{//確保一次點一個
        let newStats=[...Stats];
        newStats[i]=!newStats[i];
        setStatsClick(newStats);

        Stats.forEach((element,index)=>{
            if(element&&index!=i){
                let newStats=[...Stats];
                newStats[index]=false;
                newStats[i]=true;
                setStatsClick(newStats);
            }
          
        });     

    };
    const SetStatsFalse=()=>{
        setTimeout(() => {
                            
            setStatsClick([false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
            //console.log(statsClick[0]);
          },100);

    };

   

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                
                <Pressable style={styles.teamItem}>
                    <Image source={require('../src/img/4.png')} style={{width:60, height:60}}/>
                    <Text style={styles.teamNameText}>國北丙藍</Text>
                </Pressable>
                <View style={styles.score}>
                    <Text style={styles.scoreText}>{game[whichGame].ScoreHome}</Text>
                </View>
                <View style={styles.time}>
                    <Text style={styles.timeText}>{game[whichGame].Time}</Text>
                </View>
                <View style={styles.score}>
                    <Text style={styles.scoreText}>{game[whichGame].ScoreAway}</Text>
                </View>
                <View style={styles.teamItem}>
                <MaterialCommunityIcons name="baby-face" size={60} color="black" />
                    <Text style={styles.teamNameText}>{game[whichGame].Name}</Text>
                </View>
            </View>

            <View style={{flexDirection:'row'}}>
                <View style={styles.playerContainer}>
                    <FlatList
                        
                        data={player}
                        renderItem={({item,index})=>(
                            item.Starter?
                            <View style={[styles.playerItem, 
                                    {backgroundColor:setClickColor(item.Click)}]}>
                                    
                                <Pressable onPress={()=>{
                                    if(itemClick==false){//第一次click player(itemClick:false->true)
                                        dispatch(setClickPlayer([item.key,true]));
                                        setItemClick(true);
                                        setItemKeyClick(item.key);
                                    }
                                    else{ //已經click某plyer
                                        if(item.key==itemClickKey){//click一樣的player(itemClick:true->false)
                                            dispatch(setClickPlayer([item.key,false]));
                                            setItemClick(false);
                                            setItemKeyClick(null);
                                        
                                        }
                                        else{//click不一樣的player
                                            dispatch(setClickPlayer([itemClickKey,false]));
                                            dispatch(setClickPlayer([item.key,true]));
                                            setItemClick(true);
                                            setItemKeyClick(item.key);
                                        }
                                    }
                                }}> 
                                    

                                    
                                            
                                
                                    <Text style={styles.playerText}>{item.Number}
                                        <Text style={styles.playerText}>{item.Name}</Text>
                                    </Text>
                                    
                                </Pressable>
                            </View>:null
                        )}
                        
                    />
                    <Pressable style={styles.btn}>
                        <Text style={styles.btnText}>更換球員</Text>
                    </Pressable>

                </View>
            
                <View style={styles.content}>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[0])}]} onPress={()=>{
                       
                        if(itemClick){//player is clicked
                            updateStatsClick(statsClick,0);
                            dispatch(setTwoPoint([whichGame,itemClickKey,0]));
                            SetStatsFalse();

                        } 
                    }}> 
                        <Text style={styles.btnText}>兩分中</Text>
                    </Pressable>
                                                               
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[1])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,1);
                        dispatch(setTwoPoint([whichGame,itemClickKey,1]));
                        SetStatsFalse();

                    }
                    }}> 
                            <Text style={styles.btnText}>兩分不中</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[2])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,2);
                        dispatch(setThreePoint([whichGame,itemClickKey,0]));
                        SetStatsFalse();

                    }
                    }}> 
                            <Text style={styles.btnText}>三分中</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[3])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,3);
                        dispatch(setThreePoint([whichGame,itemClickKey,1]));
                        SetStatsFalse();

                    }
                    }}> 
                            <Text style={styles.btnText}>三分不中</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[4])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,4);
                        dispatch(setFreeThrow([whichGame,itemClickKey,0]));
                        SetStatsFalse();

                    }
                    }}> 
                            <Text style={styles.btnText}>罰球中</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[5])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,5);
                        dispatch(setFreeThrow([whichGame,itemClickKey,1]));
                        SetStatsFalse();

                    }
                    }}> 
                            <Text style={styles.btnText}>罰球不中</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[6])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,6);
                        dispatch(setRebound([whichGame,itemClickKey,0]));
                        SetStatsFalse();

                    }
                    }}> 
                            <Text style={styles.btnText}>防守籃板</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[7])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,7);
                        dispatch(setRebound([whichGame,itemClickKey,1]));
                        SetStatsFalse();

                    }
                    }}> 
                            <Text style={styles.btnText}>進攻籃板</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[8])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,8);
                        dispatch(setAssist([whichGame,itemClickKey]));
                        SetStatsFalse();

                    }
                    }}> 
                            <Text style={styles.btnText}>助攻</Text>
                    </Pressable>

                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[9])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,9);
                        dispatch(setTurnOver([whichGame,itemClickKey]));
                        SetStatsFalse();

                    }
                    }}> 
                            <Text style={styles.btnText}>失誤</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[10])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,10);
                        dispatch(setSteal([whichGame,itemClickKey]));
                        SetStatsFalse();

                    }
                    }}> 
                            <Text style={styles.btnText}>抄截</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[11])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,11);
                        dispatch(setBlock([whichGame,itemClickKey]));
                        SetStatsFalse();

                    }
                    }}> 
                            <Text style={styles.btnText}>火鍋</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[12])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,12);
                        dispatch(setFoul([whichGame,itemClickKey]));
                        SetStatsFalse();

                    }
                    }}> 
                            <Text style={styles.btnText}>防守犯規</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[13])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,13);
                        dispatch(setFoul([whichGame,itemClickKey]));
                        SetStatsFalse();

                    }
                    }}> 
                            <Text style={styles.btnText}>進攻犯規</Text>
                    </Pressable>

                    
                </View>
                
                
            </View>

                       


        </View>
        

    



    );
};


export default RecordGame;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:30,
        
    },
    headerContainer:{
        justifyContent:'space-evenly',
        flexDirection:'row'
    },
    teamItem:{
        alignItems:'center'
    },
    teamNameText:{
        fontSize:40
    },
    score:{

    },
    scoreText:{
        fontSize:40
    },
    time:{

    },
    timeText:{
        fontSize:40
    },
    playerContainer:{

    },
    playerItem:{
        width:200,
        borderWidth:2,
        marginBottom:20,
        borderRadius:20,
        alignItems:'center',
       

    },
    playerText:{
       fontSize:40,
       color:'black'
    },
    playerClick:{
        backgroundColor:'red'
    },
    btn:{
        width:200,
        borderWidth:2,
        marginBottom:20,
        borderRadius:20,
        alignItems:'center'
    },
    btnText:{
        fontSize:30
    },
    content:{
        paddingRight:300,
        flexDirection:"row",
        marginLeft:40,
        flexWrap:'wrap',
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
    }





});