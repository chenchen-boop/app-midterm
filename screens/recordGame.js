import React,{ useState } from 'react';
import {View,Text,StyleSheet,FlatList,Pressable,Image,Button} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { selectPlayer ,setTwoPoint,setClickPlayer } from '../src/redux/playerSlice';
import {selectGame,selectWhichGame} from '../src/redux/gameSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



const RecordGame=()=>{
    const player=useSelector(selectPlayer);
    const game=useSelector(selectGame);
    const whichGame=useSelector(selectWhichGame);
    const dispatch=useDispatch();
    
    const setClickColor=(itemClick)=>{
        if(itemClick) return('red');
        else return('white');
        
    };
    const [itemClick,setItemClick]=useState();
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
                                    
                                    if(item.key==itemClick||itemClick==null){
                                       
                                        dispatch(setClickPlayer(item.key));
                                    }
                                    else{
                                        
                                        if(player[itemClick].Click){
                                            
                                            dispatch(setClickPlayer(itemClick));
                                            dispatch(setClickPlayer(item.key));
                                        }
                                        else dispatch(setClickPlayer(item.key));
                                        
                                    }
                                    
                                    setItemClick(item.key);
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
                    <Pressable style={styles.conBtn} onPress={()=>dispatch(setTwoPoint([0,0,0]))}><Text style={styles.btnText}>兩分中</Text></Pressable>
                    <Pressable style={styles.conBtn} onPress={()=>dispatch(setTwoPoint([0,0,1]))}><Text style={styles.btnText}>兩分不中</Text></Pressable>
                    <Pressable style={styles.conBtn}><Text style={styles.btnText}>三分中</Text></Pressable>
                    <Pressable style={styles.conBtn}><Text style={styles.btnText}>三分不中</Text></Pressable>
                    
                    <Pressable style={styles.conBtn}><Text style={styles.btnText}>罰球中</Text></Pressable>
                    <Pressable style={styles.conBtn}><Text style={styles.btnText}>罰球不中</Text></Pressable>
                    <Pressable style={styles.conBtn}><Text style={styles.btnText}>防守籃板</Text></Pressable>
                    <Pressable style={styles.conBtn}><Text style={styles.btnText}>進攻籃板</Text></Pressable>

                    <Pressable style={styles.conBtn}><Text style={styles.btnText}>助攻</Text></Pressable>
                    <Pressable style={styles.conBtn}><Text style={styles.btnText}>失誤</Text></Pressable>
                    <Pressable style={styles.conBtn}><Text style={styles.btnText}>抄截</Text></Pressable>
                    <Pressable style={styles.conBtn}><Text style={styles.btnText}>失誤</Text></Pressable>

                    <Pressable style={styles.conBtn}><Text style={styles.btnText}>防守犯規</Text></Pressable>
                    <Pressable style={styles.conBtn}><Text style={styles.btnText}>進攻犯規</Text></Pressable>
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