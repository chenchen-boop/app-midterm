import React from 'react';
import { View ,Text} from "react-native";

const Ready=({route,navigation})=>{
    // console.log({route});
    // const{ item}= route.params;

    // const { item } = route.params;
    const { Date,Name,Type } = route.params;
   
    return(
        <View>
            <Text>{Date}</Text>
            <Text>{Name}</Text>
            <Text>{Type}</Text>
          
        
        </View>
    )




}
export default Ready;