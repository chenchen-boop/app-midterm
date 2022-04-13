import React from 'react';
import { View ,Text,StyleSheet,Pressable,Alert} from "react-native";
import GlobalStyle from '../styles/global'

const Ready=({route})=>{
    
    const { Date,Name,Type } = route.params;
   
    return(
        <View style={GlobalStyle.container} >
            <Text style={GlobalStyle.text}>{Type}</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.MainText}>國北丙籃</Text>
                <Text style={styles.MainText}>{Name}</Text>
            </View>
            <Text style={styles.MainText}>{Date}</Text>
            <Pressable >
                <Text style={[GlobalStyle.text,GlobalStyle.btn]} >記錄自己數據</Text>
            </Pressable>
            <Pressable 
                
                onPress={()=>Alert.alert('comming soon')}>
                <Text style={[GlobalStyle.text,GlobalStyle.btn]}>記錄兩隊數據</Text>
            </Pressable >
            
            
        </View>

    )

}
export default Ready;

const styles = StyleSheet.create({
    MainText:{
        fontSize:40,
        margin:40
    }



})