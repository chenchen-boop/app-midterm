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
      key:0,
    },
    {
      Name: 'bb',
      Number:'2',
      Height:'170',
      Weight:'60',
      Starter:true,
      key:1,
    },
    {
      Name: 'cc',
      Number:'3',
      Height:'170',
      Weight:'60',
      Starter:true,
      key:2,
    },
    {
      Name: 'dd',
      Number:'4',
      Height:'170',
      Weight:'60',
      Starter:true,
      key:3,
    },
    {
      Name: 'ee',
      Number:'5',
      Height:'170',
      Weight:'60',
      Starter:true,
      key:4,
    },
    

  ],
  amount:5 //keyStartNumber 




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
export const {todoAdded,setPlayer,setAmount,del} = playerSlice.actions;

export default playerSlice.reducer;