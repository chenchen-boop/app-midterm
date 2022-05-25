import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Login from './screens/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './route/homeStack';
import {store} from './src/redux/store';
import { Provider } from 'react-redux';
const Stack =createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <HomeStack /> 
      </NavigationContainer> 
    </Provider> 
   

  );
}

