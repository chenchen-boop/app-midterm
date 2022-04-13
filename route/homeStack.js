import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavaigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import Login from '../screens/login';
import Main from '../screens/main';
import Manage from '../screens/manage';
import CreatePlayer from '../screens/createplayer';
const Stack =createNativeStackNavigator();

const HomeStack=()=>{

    return(
       
            <Stack.Navigator screenOptions={{headerShown:true}}>
                <Stack.Group> 
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Login' component={Login}/>
                    <Stack.Screen name='Main' component={Main}/>
                    {/* <Stack.Screen name='CreatePlayer' component={CreatePlayer}/> */}
                    <Stack.Screen name='Manage' component={Manage}/>
                </Stack.Group>
            </Stack.Navigator>
       
    );


}


export  default HomeStack;