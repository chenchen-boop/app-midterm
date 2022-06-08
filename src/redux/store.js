import { configureStore } from "@reduxjs/toolkit";
import { persistStore,persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";

import playerReducer from './playerSlice';
import settingReducer from "./settingSlice";
import gameReducer from "./gameSlice";



const persistConfig={
  key:'root',
  storage:AsyncStorage,
};


export  const store= configureStore({
  reducer: {
   
    player:persistReducer(persistConfig,playerReducer),
    setting:persistReducer(persistConfig,settingReducer),
    game:persistReducer(persistConfig,gameReducer),
  },

  middleware:[thunk]
});

 export const persistor =persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import playerReducer from './playerSlice';
// import settingReducer from "./settingSlice";
// import gameReducer from "./gameSlice";

// export  const store= configureStore({
//       reducer: {
//         player:playerReducer,
//         setting:settingReducer,
//         game:gameReducer,
//       }
    
// });

