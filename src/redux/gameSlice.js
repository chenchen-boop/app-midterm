import { createSlice } from "@reduxjs/toolkit";

const initialState={
    game:[{
        Date:'123',
        Type:'a',
        Name:'a',
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

    }


});
export const selectGame=(state)=>state.game.game;
export const {todoAdded}=gameSlice.actions;
export default gameSlice.reducer;