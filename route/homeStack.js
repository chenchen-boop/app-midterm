import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavaigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import Login from '../screens/login';

const Stack =createNativeStackNavigator();

const HomeStack=()=>{

    return(
       
            <Stack.Navigator>
                <Stack.Group>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Login' component={Login}/>
            </Stack.Group>
            </Stack.Navigator>
       
    );


}


export  default HomeStack;