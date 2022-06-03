import { useState,useEffect, } from 'react';
import { View,Text,Button } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import { useSelector,useDispatch } from 'react-redux';
import {selectGame,selectWhichGame,setQuarterLastTime}from '../redux/gameSlice';
import {selectPlayer, setPlayerTime,setDisplayTime}from '../redux/playerSlice';



const Timer=()=>{
    const game=useSelector(selectGame);
    const whichGame=useSelector(selectWhichGame);
    const player=useSelector(selectPlayer);
    const dispatch=useDispatch();

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
        startTimer();
        dispatch(setQuarterLastTime([whichGame,secondsLeft]));
        
    },[secondsLeft,pause]);
    
    
    return(
        
        <View>
            
            <Text>{clockify().displayMins}:
                <Text>{clockify().displaySeconds}</Text>
            </Text>
            

            <Button title='停錶' onPress={()=>setPause(!pause)}></Button>

        </View>
        
    
    
    
    
    
    );
    
};
export default Timer;