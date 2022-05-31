import { createSlice } from "@reduxjs/toolkit";

const initialState={
    game:[{
        Date:'123',
        Type:'a',
        Name:'a',
        Time:10,
        ScoreHome:0,
        ScoreAway:0,
        key:'0',
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
        //setGame:(state,action)=>
        //{
            // state.game[action.payload[0]].Time=action.payload[1];
        //}

    }


});
export const selectGame=(state)=>state.game.game;
export const selectWhichGame=(state)=>state.game.whichGame;
export const {todoAdded,setWhichGame,delGame}=gameSlice.actions;
export default gameSlice.reducer;