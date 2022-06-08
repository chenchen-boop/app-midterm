import {StyleSheet,View,Button,Text,SafeAreaView,Image,ImageBackground}from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


 
const Home=()=>{
    const navigation = useNavigation(); 
   
    return(
    <SafeAreaView style={styles.container}>
      
        <ImageBackground  source={require('../src/img/3.jpg')} style={styles.image}   resizeMode='cover'>
          
        <View style={{alignItems: "center",}}>

          <View style={styles.titleBox}>
            <Text style={styles.titleText}>籃球記憶</Text>
          </View>
            
          <View style={[styles.btn,{backgroundColor:'#00008B'}]}>
              <Pressable onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.text}>登入</Text>
              </Pressable>
          </View>
          <View style={[styles.btn,{backgroundColor:`#dcdcdc`}]}>
              <Pressable onPress={()=>Alert.alert('comming soon')}>
                <Text style={[styles.text,{color:'black'}]}>註冊</Text>
              </Pressable>
          </View>

        </View>
          
        </ImageBackground>
        

    </SafeAreaView>
    );



}
export default Home;

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      
    
    },
    titleBox:{
      
      // marginTop:10,
      marginBottom:190,
      
    },
    titleText:{
      color: "white",
      fontFamily: 'serif',
      fontWeight:'bold',
      fontSize:100,
      letterSpacing:20,
    },
    image:{
      flex: 1,
      justifyContent: "center",
    } ,
    btn: {
      
      textAlign: "center",
      // backgroundColor: "#000000c0",
      backgroundColor: "#3399ff",
      marginBottom:20,
      // padding:20,
      borderRadius:40,
      paddingHorizontal:180,
      paddingVertical:10,
      
    },
    text:{
      fontSize: 42,
      color: "white",
      fontFamily: 'serif',
      fontWeight:'bold',
      // lineHeight: 42,
      
    }
  });
  