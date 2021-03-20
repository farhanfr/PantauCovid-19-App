import React, { Component } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { Router } from './src/routes';
import { Text, View } from 'react-native';

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <View style={{backgroundColor:'white',padding:20}}>
          <Text style={{textAlign:'center',fontWeight:'bold',fontSize:18}}>Pantau Covid-19</Text>
        </View>
        <Router/>
      </NavigationContainer>
    )
  }
}

export default App
