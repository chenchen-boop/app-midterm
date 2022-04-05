import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Login from './screens/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './route/homeStack';
const Stack =createNativeStackNavigator();

export default function App() {
  return (
    
     <NavigationContainer>
        <HomeStack /> 
    </NavigationContainer> 
   

  );
}

