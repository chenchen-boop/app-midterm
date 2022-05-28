import { createSlice } from "@reduxjs/toolkit";

const initialState={
    game:[{
        Date:'123',
        Type:'a',
        Name:'a',
        Time:10,
        key:'1',
    }]

};

const gameSlice=createSlice({
    name:'game',
    initialState,
    reducers:{
        todoAdded: (state, action) =>{
       
            state.game.push(action.payload);
        
        },
        //setGame:(state,action)=>
        //{
            // state.game[action.payload[0]].Time=action.payload[1];
        //}

    }


});
export const selectGame=(state)=>state.game.game;
export const {todoAdded}=gameSlice.actions;
export default gameSlice.reducer;