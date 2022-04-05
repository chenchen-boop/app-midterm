import {StyleSheet,View,Button,Text,SafeAreaView}from 'react-native';

const Home=()=>{
    return(
    <SafeAreaView style={styles.container}>

        <Button title='登入'></Button>
        <Button title='註冊'></Button>
        
        

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
  