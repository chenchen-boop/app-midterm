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
            <Pressable onPress={()=>navigation.navigate('Login')}>
              <Text style={styles.text}>登入</Text>
            </Pressable>
            <Pressable onPress={()=>Alert.alert('comming soon')}>
              <Text style={styles.text}>註冊</Text>
            </Pressable>
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
    image:{
      flex: 1,
      justifyContent: "center",
    } ,
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0",
      margin:20,
      padding:10,
      borderRadius:10,
      paddingHorizontal:70
    
      
    }
  });
  