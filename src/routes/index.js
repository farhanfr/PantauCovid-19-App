import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { LocalRegionScreen, WorldRegionScreen, AboutScreen, WebViewScreen } from '../screens'

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export const Router = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="LocalRegionScreen"
                component={LocalRegionScreen}
                options={{
                    title: "Indonesia",
                }} />
            <Tab.Screen
                name="WorldRegionScreen"
                component={WorldRegionScreen}
                options={{
                    title: "World"
                }} />
            <Tab.Screen
                name="AboutScreen"
                component={AboutScreen}
                options={{
                    title: "About"
                }} />
            <Tab.Screen
                name="WebViewScreen"
                component={About}
                options={{
                    title: "About"
                }}
            />
        </Tab.Navigator>
    )
}

function About() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="AboutScreen" component={AboutScreen} 
            options={{
                headerShown:false
            }}/>
            <Stack.Screen name="WebViewScreen" component={WebViewScreen} 
            options={{
                headerShown:false
            }}/>
        </Stack.Navigator>
    )
}
