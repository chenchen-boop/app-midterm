import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavaigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import Login from '../screens/login';
import Main from '../screens/main';
import Manage from '../screens/manage';
import CreatePlayer from '../screens/createplayer';
import Ready from '../screens/ready';
import Splash from '../screens/splash';
import Starter from '../screens/starter';
import RecordGame from '../screens/recordGame';

import { HeaderTitle } from 'react-navigation-stack';
const Stack =createNativeStackNavigator();



const HomeStack=()=>{

    return(
       
            <Stack.Navigator screenOptions={{headerShown:true, headerTitleAlign: 'center'}}>
                <Stack.Group> 
                    <Stack.Screen name='Splash' component={Splash} options={{headerShown: false,orientation: 'portrait'}}/>
                    <Stack.Screen name='Home' component={Home} options={{headerBackVisible: false,orientation: 'portrait'}}/>
                    <Stack.Screen name='Login' component={Login} options={{orientation: 'portrait'}} />
                    <Stack.Screen name='Main' component={Main} options={{orientation: 'portrait'}}/>
                    {/* <Stack.Screen name='CreatePlayer' component={CreatePlayer}/> */}
                    <Stack.Screen name='Manage' component={Manage} options={{orientation: 'portrait'}}/>
                    <Stack.Screen name='Ready' component={Ready} options={{orientation: 'portrait'}}/>
                    <Stack.Screen name='Starter' component={Starter}  options={{orientation: 'landscape'}}/>
                    <Stack.Screen name='RecordGame' component={RecordGame} options={{orientation: 'landscape'}}/>
                    
                </Stack.Group>
            </Stack.Navigator>
       
    );


}


export  default HomeStack;
