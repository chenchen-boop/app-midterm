import {StyleSheet,View,Button,Text,SafeAreaView}from 'react-native';
import { useNavigation } from '@react-navigation/native';

 
const Home=()=>{
    const navigation = useNavigation(); 
 
    return(
    <SafeAreaView style={styles.container}>

        <Button onPress={()=>navigation.navigate('Login')} title='登入'/>
        <Button title='註冊'/>
        
        

    </SafeAreaView>
    );



}
export default Home;

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  