import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default class AboutComponent extends Component {
    render() {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white',paddingHorizontal:20}}>
                <Text style={{fontSize:20}}>PantauCovid-19 App</Text>
                <View style={{height:10}}/>
                <Text style={{textAlign:'center',fontSize:15}}>Aplikasi yang digunakan untuk melihat jumlah covid-19 di Indonesia maupun dunia</Text>
                <View style={{height:30}}/>
                <Text style={{fontSize:18}}> Sumber API Aplikasi PantauCovid-19 </Text>
                <View style={{height:10}}/>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('WebViewScreen')}>
                    <Text style={{fontSize:16}}>https://kawalcorona.com/api/</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


