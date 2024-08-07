import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from '../screens/Home'
import Details from "../screens/Details";

 
export default function Routes() {
    const stack = createStackNavigator();
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name ='home' component={Home}/>
                <stack.Screen name ='details' component={Details}/>
            </stack.Navigator>
        </NavigationContainer>
    );
}