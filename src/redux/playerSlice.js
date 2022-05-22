import { createSlice } from "@reduxjs/toolkit";

const initialState={
  player:{
    name: '',
    number:'',
    height:'',
    weight:'',
  },
  login:{
    hasLogin:false,
  }
};
const playerSlice = createSlice({
  name: "player",
  initialState, 

  reducers: {
    setPlayerInfo: (state,action) => {
      state.player=action.payload;
    },

    login:(state)=>{
      state.login.hasLogin=true;
    },

    logout:(state)=>{
      state.login.hasLogin=false;
    },
    
  }
});

// Action creators are generated for each case reducer function
// export const selectPlayer=(state)=>state.player.player;
export const {setPlayerInfo,login,logout} = playerSlice.actions;

export default playerSlice.reducer;