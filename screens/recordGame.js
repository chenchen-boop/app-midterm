import React,{ useState ,useRef, useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,Pressable,Image,Button,Modal,TouchableWithoutFeedback, Keyboard,} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { selectPlayer,setClickPlayer ,
     setTwoPoint,setDelTwoPoint,setThreePoint,setDelThreePoint,setFreeThrow,setDelFreeThrow,setRebound,setDelRebound,
     setFoul,setDelFoul,setAssist,setDelAssist,setSteal,setDelSteal,setTurnOver,setDelTurnOver,setBlock,setDelBlock,
    }from '../src/redux/playerSlice';
import {selectGame,selectWhichGame,setCurrentQuarter} from '../src/redux/gameSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import ActionSheet from 'react-native-actionsheet';
import Starter from './starter';
import Timer from '../src/component/timer';
import ChoseQuarter from '../src/component/choseQuarter';
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

    const [record,setRecord]=useState([]);

    const Record=(name,statsName)=>{

        let newRecord=[...record];
        newRecord.push([name,statsName]);
        setRecord(newRecord);

        //record.push([name,statsName]);
        //console.log(record);
        //console.log();
    
    };
    const delRecord=(record,index)=>{
        record.splice(index,1);
    };

    const delWhichRecord=(gamekey,playerKey,target)=>{ //i:有子項目的stats(0/1)
       // console.log("into delWhichRecord");
        //console.log(gamekey,playerKey,target);
        switch(target){
            case '兩分中': dispatch(setDelTwoPoint([gamekey,playerKey,0]));break;
            case '兩分不中': dispatch(setDelTwoPoint([gamekey,playerKey,1]));break;

            case '三分中': dispatch(setDelThreePoint([gamekey,playerKey,0]));break;
            case '三分不中': dispatch(setDelThreePoint([gamekey,playerKey,1]));break;

            case '罰球中': dispatch(setDelFreeThrow([gamekey,playerKey,0]));break;
            case '罰球不中': dispatch(setDelFreeThrow([gamekey,playerKey,1]));break;

            case '防守籃板': dispatch(setDelRebound([gamekey,playerKey,0]));break;
            case '進攻籃板': dispatch(setDelRebound([gamekey,playerKey,1]));break;

            case '防守犯規': dispatch(setDelFoul([gamekey,playerKey,0]));break;
            case '進攻犯規': dispatch(setDelFoul([gamekey,playerKey,1]));break;

            case '助攻': dispatch(setDelAssist([gamekey,playerKey]));break;
            case '抄截': dispatch(setDelSteal([gamekey,playerKey]));break;
            case '失誤': dispatch(setDelTurnOver([gamekey,playerKey]));break;
            case '火鍋': dispatch(setDelBlock([gamekey,playerKey]));break;
            default:
                console.log("error");


        };
        


    };
    const [anyModal,setAnyModal]=useState(false);
    const [starterModal,setStarterModal]=useState(true);
    const [quarterModal,setQuarterModal]=useState(false);

    // const [quarter,setQuarter]=useState(game[whichGame].CurrentQuarter);
    const quarter=game[whichGame].CurrentQuarter;
    const choseQuarter=["第一節","第二節","第三節","第四節","OT1","OT2","OT3","OT4"];
    
    // useEffect(()=>{
    //     dispatch(setCurrentQuarter([whichGame,quarter]));
    //     console.log(game[whichGame].CurrentQuarter);
    // },[quarter]);
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
                
                <View style={{left:80}}>
                    {((quarter)=='1'||(quarter)=='2'||(quarter)=='3'||(quarter)=='4')
                    ?<Text style={styles.quarterTxt}>第{quarter}節</Text>
                    :<Text style={styles.quarterTxt}>OT{parseInt(quarter,10)-4}</Text>
                    }
                
                    <Timer />{/* 大錶、廷錶btn */}
                </View>

                <View style={styles.changeQuarterBtn}>
                    <Pressable onPress={()=>{
                        setQuarterModal(true);
                        // console.log(quarterModal);
                        }}>
                        <Text style={{fontSize:20}}>換節</Text>
                    </Pressable>
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
                    <Pressable style={styles.btn} onPress={()=>{
                        setStarterModal(!starterModal);
                        // console.log(starterModal);
                        
                    }}>
                        <Text style={styles.btnText}>更換球員</Text>
                    </Pressable>

                </View>
            
                <View style={styles.content}>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[0])}]} onPress={()=>{
                       
                        if(itemClick){//player is clicked
                            updateStatsClick(statsClick,0);
                            dispatch(setTwoPoint([whichGame,itemClickKey,0]));
                            SetStatsFalse();
                            Record(player[itemClickKey].Name,"兩分中");

                        } 
                    }}> 
                        <Text style={styles.btnText}>兩分中</Text>
                    </Pressable>
                                                               
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[1])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,1);
                        dispatch(setTwoPoint([whichGame,itemClickKey,1]));
                        SetStatsFalse();
                        Record(player[itemClickKey].Name,"兩分不中");
                        

                    }
                    }}> 
                            <Text style={styles.btnText}>兩分不中</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[2])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,2);
                        dispatch(setThreePoint([whichGame,itemClickKey,0]));
                        SetStatsFalse();
                        Record(player[itemClickKey].Name,"三分中");

                    }
                    }}> 
                            <Text style={styles.btnText}>三分中</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[3])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,3);
                        dispatch(setThreePoint([whichGame,itemClickKey,1]));
                        SetStatsFalse();
                        Record(player[itemClickKey].Name,"三分不中");

                    }
                    }}> 
                            <Text style={styles.btnText}>三分不中</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[4])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,4);
                        dispatch(setFreeThrow([whichGame,itemClickKey,0]));
                        SetStatsFalse();
                        Record(player[itemClickKey].Name,"罰球中");

                    }
                    }}> 
                            <Text style={styles.btnText}>罰球中</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[5])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,5);
                        dispatch(setFreeThrow([whichGame,itemClickKey,1]));
                        SetStatsFalse();
                        Record(player[itemClickKey].Name,"罰球不中");

                    }
                    }}> 
                            <Text style={styles.btnText}>罰球不中</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[6])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,6);
                        dispatch(setRebound([whichGame,itemClickKey,0]));
                        SetStatsFalse();
                        Record(player[itemClickKey].Name,"防守籃板");

                    }
                    }}> 
                            <Text style={styles.btnText}>防守籃板</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[7])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,7);
                        dispatch(setRebound([whichGame,itemClickKey,1]));
                        SetStatsFalse();
                        Record(player[itemClickKey].Name,"進攻籃板");


                    }
                    }}> 
                            <Text style={styles.btnText}>進攻籃板</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[8])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,8);
                        dispatch(setAssist([whichGame,itemClickKey]));
                        SetStatsFalse();
                        Record(player[itemClickKey].Name,"助攻");

                    }
                    }}> 
                            <Text style={styles.btnText}>助攻</Text>
                    </Pressable>

                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[9])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,9);
                        dispatch(setTurnOver([whichGame,itemClickKey]));
                        SetStatsFalse();
                        Record(player[itemClickKey].Name,"失誤");

                    }
                    }}> 
                            <Text style={styles.btnText}>失誤</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[10])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,10);
                        dispatch(setSteal([whichGame,itemClickKey]));
                        SetStatsFalse();
                        Record(player[itemClickKey].Name,"抄截");

                    }
                    }}> 
                            <Text style={styles.btnText}>抄截</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[11])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,11);
                        dispatch(setBlock([whichGame,itemClickKey]));
                        SetStatsFalse();
                        Record(player[itemClickKey].Name,"火鍋");

                    }
                    }}> 
                            <Text style={styles.btnText}>火鍋</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[12])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,12);
                        dispatch(setFoul([whichGame,itemClickKey,0]));
                        SetStatsFalse();
                        Record(player[itemClickKey].Name,"防守犯規");

                    }
                    }}> 
                            <Text style={styles.btnText}>防守犯規</Text>
                    </Pressable>
                    <Pressable style={[styles.conBtn,{backgroundColor:setClickColor(statsClick[13])}]} onPress={()=>{
                       
                       if(itemClick){//player is clicked
                        updateStatsClick(statsClick,13);
                        dispatch(setFoul([whichGame,itemClickKey,1]));
                        SetStatsFalse();
                        Record(player[itemClickKey].Name,"進攻犯規");

                    }
                    }}> 
                            <Text style={styles.btnText}>進攻犯規</Text>
                    </Pressable>

                    <FlatList
                        
                        data={record}
                        keyExtractor={() => Math.random().toString()}
                        renderItem={({item,index})=>((index>=record.length-3)?
                        (<View style={[styles.recordItem,{backgroundColor:(index==record.length-1)?'gray':null}]}>
                            <Text style={styles.recordText}>
                                {item[0]}{item[1]}
                            </Text>
                            <Pressable onPress={()=>{
                                delWhichRecord(whichGame,itemClickKey,item[1]);
                                delRecord(record,index);
                            }}>
                                <AntDesign name="delete" size={30} color="black" />
                            </Pressable>
                        </View>)
                            :null
                            
                        )}
                    />    
                    
                    
                    
                </View>
                
                
                
                
                
            </View>


            <Modal visible={starterModal||quarterModal} animationType='slide' transparent={false} >
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        {(starterModal)
                        ?
                            <View style={styles.modalContent}>
                                <MaterialIcons 
                                name='close'
                                size={24} 
                                style={{...styles.modalToggle, ...styles.modalClose}} 
                                onPress={() =>{setStarterModal(false)}} 
                                />
                                
                                <Starter/>  
                            </View>
                        :  
                            <View style={styles.modalContent}>
                                    <MaterialIcons 
                                    name='close'
                                    size={24} 
                                    style={{...styles.modalToggle, ...styles.modalClose}} 
                                    onPress={() =>{setQuarterModal(false)}} 
                                    />
                                    < ChoseQuarter/>
                                    
                            </View>
                        }  
                        </TouchableWithoutFeedback>
            </Modal>
            

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
        justifyContent:'space-around',
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
        fontSize:20,
        width:30
    },
    timeText:{
        fontSize:40
    },
    quarterTxt:{
        fontSize:30
    },
    changeQuarterBtn:{
        height:40,
        padding:5,
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        right:60,
        
        
        
    },
    choseQuarterContainer:{
        flex:1,
        flexDirection:'row',
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
    },

    recordItem:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:300,
       // height:100,
        borderWidth:1,
        borderRadius:10,
        
    },
    recordText:{
        fontSize:20,
        width:200,
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
        marginTop: 100,
       
      },
      modalContent: {
        flex: 1,
        // backgroundColor:'gray',
        
      },
      





});