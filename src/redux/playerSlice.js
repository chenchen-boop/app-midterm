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
      Starter:true,
      key:0,
    },
    {
      Name: 'bb',
      Number:'1',
      Height:'170',
      Weight:'60',
      Starter:true,
      key:1,
    }
  ],
  amount:2




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
    del:{

    },
    setPlayer:(state,action)=>{
      // return state.player.filter(({value})=>value.Starter=action.payload);
      //state.player[action.payload].Starter=!state.player[action.payload].Starter;
      state.player[action.payload].Starter=!state.player[action.payload].Starter;
    
    },
    setAmount:(state)=>{
      state.amount+=1;

    }

    // setPlayerInfo: (state,action) => {
    //   state.player=action.payload;
    // },
   

   
    
  }
});

// Action creators are generated for each case reducer function
export const selectPlayer=(state)=>state.player.player;
export const selectAmount=(state)=>state.player.amount;
export const {todoAdded,setPlayer,setAmount} = playerSlice.actions;

export default playerSlice.reducer;