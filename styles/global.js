import { StyleSheet } from "react-native";

const global = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
        borderWidth:1,
        borderColor:'#ddd',
        padding:10,
        fontSize:18,
        borderRadius:6,


    },
    text:{
        fontSize:20,
    },
    btn:{
        borderWidth:1 ,
        margin:20,
        fontSize:20,
        padding:10,
        backgroundColor:'blue' ,
        borderRadius:4

    }

  });
  
export default global;