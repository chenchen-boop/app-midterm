import { createSlice } from "@reduxjs/toolkit";

const initialState={
    modal:{
        createPlayerModalOpen:false,
        createGameModalOpen:false,
    }
        
    
};
const settingSlice=createSlice({

    name:"setting",
    initialState,
    reducers:{
        setCreatePlayerModalOpen:(state,action)=>{
            state.modal.createPlayerModalOpen=action.payload;
        },
        setCreateGameModalOpen:(state,action)=>{
            state.modal.createGameModalOpen=action.payload;
        },
        



    }





});
export const selectModal=(state)=>state.setting.modal;
export const {setCreatePlayerModalOpen,setCreateGameModalOpen}=settingSlice.actions;
export default settingSlice.reducer;