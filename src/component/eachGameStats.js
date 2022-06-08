import { View,Text,FlatList ,StyleSheet,SafeAreaView,TouchableWithoutFeedback,ScrollView,} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {selectPlayer}from '../redux/playerSlice';
import {selectGame,selectWhichGame,setEachPlayerStats}from '../redux/gameSlice';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import React,{ useEffect ,useState}  from 'react';
import DataTable, { COL_TYPES, } from 'react-native-datatable-component';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
const EachGameStats=()=>{
    const player=useSelector(selectPlayer);
    const [playerName,setPlayerName]=useState([player.map((item)=>{return item.Name})]);
    const whichGame=useSelector(selectWhichGame);
    const game=useSelector(selectGame);
    const teamStats=game[whichGame].Stats;
    const dispatch=useDispatch();
    const statsTitle=['背號','姓名','上場時間','得分','籃板','助攻','抄截','阻攻','投籃命中','投籃出手','投籃%','三分命中數','三分出手數','兩分命中數','兩分出手數','罰球命中','罰球次數','罰球%','進攻籃板','防守籃板','失誤','犯規','正負值'];
    const widthArr=[120, 120, 120, 120, 120,120, 120, 120, 120, 120,
                    120, 120, 120, 120, 120,120, 120, 120, 120,120,
                    120, 120,120 ];
    let [allPlayerStats,setAllPlayerStats]=useState([]);
    
    const [stats,setStats]=useState([
        'NaN','NaN','NaN',
        teamStats.Point,teamStats.Rebound,teamStats.Assist,teamStats.Steal,teamStats.Block,
        teamStats.FGM,teamStats.FGA,teamStats.FG,teamStats.ThreeFGM,teamStats.ThreeFGA,
        teamStats.TwoFGM,teamStats.TwoFGA,teamStats.FTM,teamStats.FTA,teamStats.FT,
        teamStats.Orebound,teamStats.Drebound,teamStats.TurnOver,teamStats.Foul,teamStats.PlusMinus,
    ]);

    
    
    useEffect(()=>
        {
            setAllPlayerStats(
            (player.map((item)=>{
                return(
                    [item.Number,item.Name,item.Stats.Time[whichGame],
                    2*item.Stats.TwoPoint[whichGame][0]+3*item.Stats.ThreePoint[whichGame][0]+1*item.Stats.FreeThrow[whichGame][0],item.Stats.Rebound[whichGame][0]+item.Stats.Rebound[whichGame][1],item.Stats.Assist[whichGame],item.Stats.Steal[whichGame],item.Stats.Block[whichGame],
                    item.Stats.TwoPoint[whichGame][0]+item.Stats.ThreePoint[whichGame][0],item.Stats.TwoPoint[whichGame][0]+item.Stats.ThreePoint[whichGame][0]+item.Stats.TwoPoint[whichGame][1]+item.Stats.ThreePoint[whichGame][1],
                    (100*(item.Stats.TwoPoint[whichGame][0]+item.Stats.ThreePoint[whichGame][0])/(item.Stats.TwoPoint[whichGame][0]+item.Stats.ThreePoint[whichGame][0]+item.Stats.TwoPoint[whichGame][1]+item.Stats.ThreePoint[whichGame][1])).toFixed(2)+'%',
                    item.Stats.ThreePoint[whichGame][0],item.Stats.ThreePoint[whichGame][0]+item.Stats.ThreePoint[whichGame][1],
                    item.Stats.TwoPoint[whichGame][0],item.Stats.TwoPoint[whichGame][0]+item.Stats.TwoPoint[whichGame][1],
                    item.Stats.FreeThrow[whichGame][0],item.Stats.FreeThrow[whichGame][0]+item.Stats.FreeThrow[whichGame][1],item.Stats.FreeThrow[whichGame][0]/item.Stats.FreeThrow[whichGame][0]+item.Stats.FreeThrow[whichGame][1],
                    item.Stats.Rebound[whichGame][1],item.Stats.Rebound[whichGame][0],
                    item.Stats.TurnOver[whichGame],item.Stats.Foul[whichGame][0]+item.Stats.Foul[whichGame][1],
                    "待補"]
                );
                //allPlayerStats.push([item.Number,item.Name]);
            })));
            
            dispatch(setEachPlayerStats([whichGame,allPlayerStats]));
            
            
            
            
                 
        },[]);

        
    return(
        
        <View style={styles.container}>
            
            
    
    <View>
        <ScrollView horizontal={true}>
            <View>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                    <Row data={ statsTitle} widthArr={widthArr} style={styles.header} textStyle={styles.text}/>
                </Table>
                <ScrollView style={styles.dataWrapper}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                    {
                        allPlayerStats.map((rowData, index) =>
                        (
                            
                            <Row
                                key={index}
                                data={rowData}
                                widthArr={widthArr}
                                style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                                textStyle={styles.text}
                            />
                            
                        ))
                                
                    }
                        
                        
                                <Row
                                    
                                    data={stats}
                                    widthArr={widthArr}
                                    style={[styles.row,  {backgroundColor: '#F7F6E7'}]}
                                    textStyle={styles.text}
                                />
                            

                            
                        
                        
                    </Table>
                </ScrollView>

            </View>
        </ScrollView>
    </View>


    </View>
        



    );



};
export default EachGameStats;

const styles=StyleSheet.create({
    container:{
        
        padding:30,
        // width:1000,
        
       
        
    },
    title:{
        //flex:1,
        width:110,
        borderWidth:1,
        marginRight:10,
        paddingVertical:6,
        alignItems:'center'

    },
    titleText:{
        fontSize:20
    },
    content:{
        flexDirection:'row',
        

    },
    conText:{
        fontSize:20 
    },
    box:{
        width:110,
        borderWidth:1,
        marginRight:10,
        paddingVertical:6,
        alignItems:'center'
    },

    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }



});