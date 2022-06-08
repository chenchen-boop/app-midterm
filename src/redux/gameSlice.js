import { createSlice } from "@reduxjs/toolkit";

const initialState={
    game:[{
        Date:'123',
        Type:'a',
        Name:'a',
        Time:'600',//秒
        CurrentQuarter:'1',//1~8
        QuarterLastTime:'600',
        ChangeQuarter:false,
        ScoreHome:0,
        ScoreAway:0,
        EachPlayerStats:[],
        key:'0',
        Stats:{
            Number:'NaN',
            Name:'NaN',
            Min:'NaN',
            Point:0,
            Rebound:0,
            Assist:0,
            Steal:0,
            Block:0,
            FGM:0,
            FGA:0,
            FG:'NaN',
            ThreeFGM:0,
            ThreeFGA:0,
            TwoFGM:0,
            TwoFGA:0,
            FTM:0,
            FTA:0,
            FT:'NaN',
            Orebound:0,
            Drebound:0,
            TurnOver:0,
            Foul:0,
            PlusMinus:'NaN',


            
        }
    }],
    whichGame:0,

};

const gameSlice=createSlice({
    name:'game',
    initialState,
    reducers:{
        todoAdded: (state, action) =>{
       
            state.game.push(action.payload);
        
        },
        setWhichGame:(state,{payload})=>{
            state.whichGame=payload;
        },
        delGame:(state,{payload})=>{
              state.game.splice(payload,1);
              state.game.forEach((item,index)=>{item.key=index});
             
        },
        setQuarterLastTime:(state,{payload})=>{
            state.game[payload[0]].QuarterLastTime=payload[1];//0:which game，1:剩餘時間
        },
        setCurrentQuarter:(state,{payload})=>{
            state.game[payload[0]].CurrentQuarter=payload[1];//0:which game，1:第幾節
        },
        setChangeQuarter:(state,{payload})=>{
            state.game[payload[0]].ChangeQuarter=payload[1];//0:which game，1:true/false
        },
        setEachPlayerStats:(state,{payload})=>{
            state.game[payload[0]].EachPlayerStats=payload[1];//0:which game，1:statsData
            // console.log(payload[1]);
        },
        setTeamStats:(state,{payload})=>{
            //state.game[payload[0]].EachPlayerStats.forEach()
        },
        setScoreHome:(state,{payload})=>{
            state.game[payload[0]].ScoreHome+=payload[1];
            // console.log(state.game[payload[0]].EachPlayerStats);
        },
        setTeamPoint:(state,{payload})=>{
            state.game[payload[0]].Stats.Point+=payload[1];
        },
        setTeamRebound:(state,{payload})=>{
            state.game[payload].Stats.Rebound++;
        },
        setTeamAssist:(state,{payload})=>{
            state.game[payload].Stats.Assist++;
        },
        setTeamSteal:(state,{payload})=>{
            state.game[payload].Stats.Steal++;
        },
        setTeamBlock:(state,{payload})=>{
            state.game[payload].Stats.Block++;
        },
        setTeamFGM:(state,{payload})=>{
            state.game[payload].Stats.FGM++;
        },
        setTeamFGA:(state,{payload})=>{
            state.game[payload].Stats.FGA++;
        },
        setTeamFG:(state,{payload})=>{
            state.game[payload].Stats.FG=(100*(state.game[payload].Stats.FGM/state.game[payload].Stats.FGA)).toFixed(2)+'%';
        },
        setTeamThreeFGM:(state,{payload})=>{
            state.game[payload].Stats.ThreeFGM++;
        },
        setTeamThreeFGA:(state,{payload})=>{
            state.game[payload].Stats.ThreeFGA++;
        },
        setTeamTwoFGM:(state,{payload})=>{
            state.game[payload].Stats.TwoFGM++;
        },
        setTeamTwoFGA:(state,{payload})=>{
            state.game[payload].Stats.TwoFGA++;
        },
        setTeamFTM:(state,{payload})=>{
            state.game[payload].Stats.FTM++;
        },
        setTeamFTA:(state,{payload})=>{
            state.game[payload].Stats.FTA++;
        },
        setTeamFT:(state,{payload})=>{
            state.game[payload].Stats.FT=(100*(state.game[payload].Stats.FTM/state.game[payload].Stats.FTA)).toFixed(2)+'%';
        },
        setTeamOrebound:(state,{payload})=>{
            state.game[payload].Stats.Orebound++;
        },
        setTeamDrebound:(state,{payload})=>{
            state.game[payload].Stats.Drebound++;
        },
        setTeamTurnOver:(state,{payload})=>{
            state.game[payload].Stats.TurnOver++;
        },
        setTeamFoul:(state,{payload})=>{
            state.game[payload].Stats.Foul++;
        },




        

    }


});
export const selectGame=(state)=>state.game.game;
export const selectWhichGame=(state)=>state.game.whichGame;
export const {todoAdded,setWhichGame,delGame,setQuarterLastTime,setCurrentQuarter,setChangeQuarter,setEachPlayerStats,setScoreHome,
            setTeamPoint,setTeamRebound,setTeamAssist, setTeamSteal ,setTeamBlock,
            setTeamFGM, setTeamFGA, setTeamFG,setTeamThreeFGM ,setTeamThreeFGA, setTeamTwoFGM, setTeamTwoFGA,
            setTeamFTM ,setTeamFTA, setTeamFT, setTeamOrebound, setTeamDrebound, setTeamTurnOver, setTeamFoul,
        }=gameSlice.actions;
export default gameSlice.reducer;