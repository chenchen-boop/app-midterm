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
        fontFamily: 'serif',
        fontWeight:'bold',
        color: "white",
    },
    btn:{
        
        textAlign: "center",
        backgroundColor: "#3399ff",
        margin:20,
        borderRadius:10,
        paddingVertical:10,
        paddingHorizontal:70,
        

    },
    title:{
        color: "white",
        fontFamily: 'serif',
        fontWeight:'bold',
        fontSize:70,
        marginTop:30,
        marginBottom:150,
        letterSpacing:20,
      },

  });
  
export default global;