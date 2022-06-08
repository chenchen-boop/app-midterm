import { useState,useEffect, } from 'react';
import { StyleSheet,View,Text,Button,Pressable } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import { useSelector,useDispatch } from 'react-redux';
import {selectGame,selectWhichGame,setQuarterLastTime,setChangeQuarter}from '../redux/gameSlice';
import {selectPlayer, setPlayerTime,setDisplayTime}from '../redux/playerSlice';



const Timer=()=>{
    const game=useSelector(selectGame);
    const whichGame=useSelector(selectWhichGame);
    const player=useSelector(selectPlayer);
    const dispatch=useDispatch();

    const changeQuarter=game[whichGame].ChangeQuarter;
    const [secondsLeft,setsecondsLeft]=useState(game[whichGame].QuarterLastTime);
    const [min,setMin]=useState();
    const [second,setSecond]=useState();
    const [pause,setPause]=useState(true);
    
    
    const startTimer=()=>{
        if(!pause){
            setTimeout(() => {
                setsecondsLeft(secondsLeft-1);
                PlayerTime(player);
                clockify();//for 大錶
                playerClock(player);//for player錶
                
             },1000); 
        }else clearTimeout();
    };
    const playerClock=(player)=>{
        player.forEach(element => {
            if(element.Starter){
                let mins=Math.floor(element.Stats.Time[whichGame]/60);  
                let minString=mins.toString();  
                let seconds=Math.floor(element.Stats.Time[whichGame]%60);
                let secondString=seconds.toString(); 
                let displayMins=mins<10 ?'0'+minString:mins;
                let displaySeconds=seconds<10?'0'+secondString:seconds;

                dispatch(setDisplayTime([whichGame,element.key,displayMins+':'+displaySeconds]));
                //console.log(element.Name+':'+element.Stats.Time[whichGame]);
            }
        });
        
    };

    const clockify=()=>{
        
        let mins=Math.floor((secondsLeft/60)%60);  
        let minString=mins.toString();  
        let seconds=Math.floor(secondsLeft%60);
        let secondString=seconds.toString(); 
        let displayMins=mins<10 ?'0'+minString:mins;
        let displaySeconds=seconds<10?'0'+secondString:seconds;
        return({
            displayMins,
            displaySeconds,
        }
        );
        //setMin(displayMin);
        //setSecond(displaySecond);
    };

    const PlayerTime=(player)=>{
        player.forEach(element => {
            if(element.Starter){
                dispatch(setPlayerTime([whichGame,element.key]));
                //console.log(element.Name+':'+element.Stats.Time[whichGame]);
            }
        });
    };






     
    useEffect(()=>{
        let isMounted = true;
        if(isMounted ){
            if(changeQuarter){
                
                dispatch(setChangeQuarter([whichGame,false]));
                setsecondsLeft('600');
                console.log(secondsLeft);
            }
            startTimer();
            dispatch(setQuarterLastTime([whichGame,secondsLeft]));
        }
        return () => {
            isMounted = false;
            //console.log(isMounted);
            };
    },[secondsLeft,pause,changeQuarter]);
    
    
    return(
        
        <View styles={styles.container}>
            
                <View style={styles.content}>
                    <View style={styles.clock}>
                        <Text  style={styles.timeTxt}>{clockify().displayMins}:
                            <Text style={styles.timeTxt}>{clockify().displaySeconds}</Text>
                        </Text>
                    </View>
                    
                    <Pressable   onPress={()=>setPause(!pause)}>
                        <View style={styles.timeBtn}>
                            <Text style={{fontSize:20,color:'white'}}>停錶</Text>
                        </View>
                    </Pressable>
                </View>
                
            

        </View>
        
    
    
    
    
    
    );
    
};
export default Timer;
const styles=StyleSheet.create({
    container:{
        flex:1,
        width:500,
       
    },
    content:{
        flexDirection:'row',
        // s
        

    },
    timeBtn:{
        //width:30,
        paddingHorizontal:20,
        paddingVertical:5,
        borderWidth:1,
        borderRadius:10,
        alignItems:'center',
        marginLeft:70,
        backgroundColor:'red'
    },
    timeTxt:{
        fontSize:30,
        
    },
    content:{
        
        flexDirection:'row'
    },
    clock:{
        // marginLeft:100,
        // marginRight:160,
    },


});