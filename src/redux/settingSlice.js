import { createSlice } from "@reduxjs/toolkit";

const initialState={
    modal:{
        modalOpen:false,
    }
        
    
};
const settingSlice=createSlice({

    name:"setting",
    initialState,
    reducers:{
        setModalOpen:(state,action)=>{
            state.modal.modalOpen=action.payload;
        }


    }





});
export const selectModal=(state)=>state.setting.modal;
export const {setModalOpen}=settingSlice.actions;
export default settingSlice.reducer;