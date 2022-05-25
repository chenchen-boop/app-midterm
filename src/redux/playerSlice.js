import { createSlice } from "@reduxjs/toolkit";



// const addItemToArray = (state, action) => {
//     state.push(action.payload);
// };

const initialState={
  player:[
    {
      Name: 'cc',
      Number:'1',
      Height:'170',
      Weight:'60',
      key:'1',
    },
    {
      Name: 'bb',
      Number:'1',
      Height:'170',
      Weight:'60',
      key:'2',
    }
  ]



};





const playerSlice = createSlice({
  name: "player",
  initialState,

  reducers: {
    // todoAdded: addItemToArray,
    todoAdded: (state, action) =>{
       
        //state.player.push(action.payload);
        state.player.push(action.payload);
        

    },

    // setPlayerInfo: (state,action) => {
    //   state.player=action.payload;
    // },
   

   
    
  }
});

// Action creators are generated for each case reducer function
export const selectPlayer=(state)=>state.player.player;
export const {todoAdded} = playerSlice.actions;

export default playerSlice.reducer;