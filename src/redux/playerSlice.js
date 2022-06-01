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
        TwoPoint:[[0,0]],//進/不進
        ThreePoint:[[0,0]],//進/不進
        FreeThrow:[[0,0]],//進/不進
        Rebound:[[0,0]],//防守，進攻
        Four:[[0,0]],//防守，進攻
        Assist:[0],
        Steal:[0],
        Block:[0],
        TurnOver:[0],
        
        
        
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
      Stats:{
        TwoPoint:[[0,0]],
        ThreePoint:[[0,0]],
        FreeThrow:[[0,0]],
        Rebound:[[0,0]],
        Four:[[0,0]],
        Assist:[0],
        Steal:[0],
        Block:[0],
        TurnOver:[0],
        
        
      },
      AvgStats:{
        
      },
    },
    {
      Name: 'cc',
      Number:'3',
      Height:'170',
      Weight:'60',
      Starter:true,
      Click:false,
      key:2,
      Stats:{
        TwoPoint:[[0,0]],
        ThreePoint:[[0,0]],
        FreeThrow:[[0,0]],
        Rebound:[[0,0]],
        Four:[[0,0]],
        Assist:[0],
        Steal:[0],
        Block:[0],
        TurnOver:[0],
        
        
      },
      AvgStats:{
        
      },
    },
    {
      Name: 'dd',
      Number:'4',
      Height:'170',
      Weight:'60',
      Starter:true,
      Click:false,
      key:3,
      Stats:{
        TwoPoint:[[0,0]],
        ThreePoint:[[0,0]],
        FreeThrow:[[0,0]],
        Rebound:[[0,0]],
        Four:[[0,0]],
        Assist:[0],
        Steal:[0],
        Block:[0],
        TurnOver:[0],
        
        
      },
      AvgStats:{
        
      },
    },
    {
      Name: 'ee',
      Number:'5',
      Height:'170',
      Weight:'60',
      Starter:true,
      Click:false,
      key:4,
      Stats:{
        TwoPoint:[[0,0]],//進/不進
        ThreePoint:[[0,0]],//進/不進
        FreeThrow:[[0,0]],//進/不進
        Rebound:[[0,0]],//防守，進攻
        Four:[[0,0]],//防守，進攻
        Assist:[0],
        Steal:[0],
        Block:[0],
        TurnOver:[0],
        
        
      },
      AvgStats:{
        
      },
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
    addStats:(state,{payload})=>{//在starterScreen 中，Click startBtn，每位player就多一個stats
      state.player.forEach((item)=>{
        item.Stats.TwoPoint.push([0,0]);
        item.Stats.ThreePoint.push([0,0]);
        item.Stats.FreeThrow.push([0,0]);
        item.Stats.Rebound.push([0,0]);
        item.Stats.Four.push([0,0]);

        item.Stats.Assist.push(0);
        item.Stats.Steal.push(0);
        item.Stats.TurnOver.push(0);
        item.Stats.Block.push(0);
       
        
        //console.log( item.Stats);

      


      });
    },
    // Stats:{
      //TwoPoint:[[0,0]],







    setPlayer:(state,action)=>{
      // return state.player.filter(({value})=>value.Starter=action.payload);
      //state.player[action.payload].Starter=!state.player[action.payload].Starter;
      state.player[action.payload].Starter=!state.player[action.payload].Starter;
    
    },
    setClickPlayer:(state,{payload})=>{
      state.player[payload[0]].Click=payload[1];//payload[0]:player.key, payload[1]:true/false
    },
    


    setTwoPoint:(state,{payload})=>{
      state.player[payload[1]].Stats.TwoPoint[payload[0]][payload[2]]++;//0:gamekey,1:playerkey，2:進/不進
     
      console.log(state.player[payload[1]].Name+':'+state.player[payload[1]].Stats.TwoPoint[payload[0]][payload[2]]);
    }, 
    setThreePoint:(state,{payload})=>{
      state.player[payload[1]].Stats.ThreePoint[payload[0]][payload[2]]++;//0:gamekey,1:playerkey，2:進/不進
     
      console.log(state.player[payload[1]].Name+':'+state.player[payload[1]].Stats.ThreePoint[payload[0]][payload[2]]);
    }, 
    setFreeThrow:(state,{payload})=>{
      state.player[payload[1]].Stats.FreeThrow[payload[0]][payload[2]]++;//0:gamekey,1:playerkey，2:進/不進
     
      console.log(state.player[payload[1]].Name+':'+state.player[payload[1]].Stats.FreeThrow[payload[0]][payload[2]]);
    }, 
    setRebound:(state,{payload})=>{
      state.player[payload[1]].Stats.Rebound[payload[0]][payload[2]]++;//0:gamekey,1:playerkey，2:防守/進攻
     
      console.log(state.player[payload[1]].Name+':'+state.player[payload[1]].Stats.Rebound[payload[0]][payload[2]]);
    }, 
    setFoul:(state,{payload})=>{
      state.player[payload[1]].Stats.Foul[payload[0]][payload[2]]++;//0:gamekey,1:playerkey，2:防守/進攻
     
      console.log(state.player[payload[1]].Name+':'+state.player[payload[1]].Stats.Foul[payload[0]][payload[2]]);
    }, 
    
    setAssist:(state,{payload})=>{
      state.player[payload[1]].Stats.Assist[payload[0]]++;//0:gamekey,1:playerkey，2:進/不進
     
      console.log(state.player[payload[1]].Name+':'+state.player[payload[1]].Stats.Assist[payload[0]]);
    }, 
    setSteal:(state,{payload})=>{
      state.player[payload[1]].Stats.Steal[payload[0]]++;//0:gamekey,1:playerkey，2:進/不進
     
      console.log(state.player[payload[1]].Name+':'+state.player[payload[1]].Stats.Steal[payload[0]]);
    }, 
    setTurnOver:(state,{payload})=>{
      state.player[payload[1]].Stats.TurnOver[payload[0]]++;//0:gamekey,1:playerkey，2:進/不進
     
      console.log(state.player[payload[1]].Name+':'+state.player[payload[1]].Stats.TurnOver[payload[0]]);
    }, 
    setBlock:(state,{payload})=>{
      state.player[payload[1]].Stats.Block[payload[0]]++;//0:gamekey,1:playerkey，2:進/不進
     
      console.log(state.player[payload[1]].Name+':'+state.player[payload[1]].Stats.Block[payload[0]]);
    }, 

    

  }  
});

// Action creators are generated for each case reducer function
export const selectPlayer=(state)=>state.player.player;
export const selectAmount=(state)=>state.player.amount;
export const {todoAdded,setPlayer,setClickPlayer,setAmount,del,
  setTwoPoint,setThreePoint,setFreeThrow,setRebound,setFoul,setAssist,setSteal,setTurnOver,setBlock,
  addStats} = playerSlice.actions;

export default playerSlice.reducer;