import { createSlice } from "@reduxjs/toolkit";



// const addItemToArray = (state, action) => {
//     state.push(action.payload);
// };

const initialState={
  player:[
    {
      Name: 'aa',
      Number:'1',
      Height:'170',
      Weight:'60',
      Starter:true,
      Click:false,
      key:0,
      Stats:{
        TwoPoint:[[0,0]],
        ThreePoint:[[]],
        Freethrow:[[]],
        Drebound:[[]],
        Orebound:[[]],
        Assist:[[]],
        Steal:[[]],
        TurnOver:[[]],
        Dfour:[[]],
        Ofour:[[]],
      },
      AvgStats:{
        
      },
        




     
    },
    {
      Name: 'bb',
      Number:'2',
      Height:'170',
      Weight:'60',
      Starter:true,
      Click:false,
      key:1,
    },
    {
      Name: 'cc',
      Number:'3',
      Height:'170',
      Weight:'60',
      Starter:true,
      Click:false,
      key:2,
    },
    {
      Name: 'dd',
      Number:'4',
      Height:'170',
      Weight:'60',
      Starter:true,
      Click:false,
      key:3,
    },
    {
      Name: 'ee',
      Number:'5',
      Height:'170',
      Weight:'60',
      Starter:true,
      Click:false,
      key:4,
    },
    

  ],
 




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
    del:(state,{payload})=>{
    //  return state.player.filter((item)=>item.key!=payload);
      state.player.splice(payload,1);
      state.player.forEach((item,index)=>{item.key=index});
     
    // }
     
  //  state.player.filter((item)=>console.log(item.key));
      
    },
    addStats:(state,{payload})=>{

    },







    setPlayer:(state,action)=>{
      // return state.player.filter(({value})=>value.Starter=action.payload);
      //state.player[action.payload].Starter=!state.player[action.payload].Starter;
      state.player[action.payload].Starter=!state.player[action.payload].Starter;
    
    },
    setClickPlayer:(state,{payload})=>{
      state.player[payload].Click=!state.player[payload].Click;//payload[0]:player.key, payload[1]:true/false
    },
    setTwoPoint:(state,{payload})=>{
      state.player[payload[1]].Stats.TwoPoint[payload[0]][payload[2]]++;//0:gamekey,1:playerkey，2:進/不進
      console.log(state.player[payload[1]].Stats.TwoPoint[payload[0]][payload[2]]);
    
    // setPlayerInfo: (state,action) => {
    //   state.player=action.payload;
    // },
   
    } 
  }  
});

// Action creators are generated for each case reducer function
export const selectPlayer=(state)=>state.player.player;
export const selectAmount=(state)=>state.player.amount;
export const {todoAdded,setPlayer,setClickPlayer,setAmount,del,setTwoPoint,} = playerSlice.actions;

export default playerSlice.reducer;