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
import { HeaderTitle } from 'react-navigation-stack';
const Stack =createNativeStackNavigator();



const HomeStack=()=>{

    return(
       
            <Stack.Navigator screenOptions={{headerShown:true, headerTitleAlign: 'center'}}>
                <Stack.Group> 
                    <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}/>
                    <Stack.Screen name='Home' component={Home} options={{headerBackVisible: false}}/>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Main' component={Main}/>
                    {/* <Stack.Screen name='CreatePlayer' component={CreatePlayer}/> */}
                    <Stack.Screen name='Manage' component={Manage}/>
                    <Stack.Screen name='Ready' component={Ready}/>
                </Stack.Group>
            </Stack.Navigator>
       
    );


}


export  default HomeStack;
