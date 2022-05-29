import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { selectPlayer } from '../src/redux/playerSlice';
import {selectGame,selectWhichGame} from '../src/redux/gameSlice';


const RecordGame=()=>{
    const player=useSelector(selectPlayer);
    const game=useSelector(selectGame);
    const whichGame=useSelector(selectWhichGame);
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.teamName}>
                    <Text style={styles.teamNameText}>國北丙藍</Text>
                </View>
                <View style={styles.score}>
                    <Text style={styles.scoreText}>{game[whichGame].ScoreHome}</Text>
                </View>
                <View style={styles.time}>
                    <Text style={styles.timeText}>{game[whichGame].Time}</Text>
                </View>
                <View style={styles.score}>
                    <Text style={styles.scoreText}>{game[whichGame].ScoreAway}</Text>
                </View>
                <View style={styles.teamName}>
                    <Text style={styles.teamNameText}>{game[whichGame].Name}</Text>
                </View>
            </View>
        </View>

    



    );
};


export default RecordGame;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:30
    },
    headerContainer:{
        justifyContent:'space-evenly',
        flexDirection:'row'
    },
    teamName:{
        
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
    }





});