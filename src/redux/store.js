// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore,persistReducer } from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import thunk from "redux-thunk";

// import playerReducer from './playerSlice';


// const persistConfig={
//   key:'root',
//   storage:AsyncStorage,
// };


// export  const store= configureStore({
//   reducer: {
   
//     player:persistReducer(persistConfig,playerReducer),

//   },

//   middleware:[thunk]
// });

//  export const persistor =persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import playerReducer from './playerSlice';
import settingReducer from "./settingSlice";

export  const store= configureStore({
      reducer: {
        player:playerReducer,
        setting:settingReducer
      }
    
});

