import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {dangerColor,warningColor,successColor} from '../../const/color'

export default class HomeWorldRegionComponents extends Component {
    render() {
        const{dataWorldPositive,dataWorldRecovery,dataWorldDeath}=this.props
        return (
            <ScrollView>
                <View style={{paddingHorizontal:15,paddingVertical:12}}>
                    <View style={{backgroundColor:successColor,flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingVertical:30,paddingHorizontal:10,shadowColor: 'black',elevation: 5}}>
                        <View style={{flex:1}}>
                            <Text style={{textAlign:'center',fontSize:19,color:'white',fontWeight:'bold'}}>Jumlah Sembuh</Text>
                            <Text style={{textAlign:'center',fontSize:19,color:'white'}}>{dataWorldRecovery.value}</Text>
                        </View>
                        <View style={{flex:1}}>
                        <Text style={{textAlign:'center'}}><MaterialCommunityIcons name="emoticon-happy" color='white' size={80} /></Text>
                        </View>
                    </View>
                </View>
                <View style={{paddingHorizontal:15,paddingVertical:12}}>
                    <View style={{backgroundColor:warningColor,flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingVertical:30,paddingHorizontal:10,shadowColor: 'black',elevation: 5}}>
                        <View style={{flex:1}}>
                            <Text style={{textAlign:'center',fontSize:19,color:'white',fontWeight:'bold'}}>Jumlah Positif</Text>
                            <Text style={{textAlign:'center',fontSize:19,color:'white'}}>{dataWorldPositive.value}</Text>
                        </View>
                        <View style={{flex:1}}>
                        <Text style={{textAlign:'center'}}><Icon name="sad" color='white' size={80} /></Text>
                        </View>
                    </View>
                </View>
                <View style={{paddingHorizontal:15,paddingVertical:12}}>
                    <View style={{backgroundColor:dangerColor,flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingVertical:30,paddingHorizontal:10,shadowColor: 'black',elevation: 5}}>
                        <View style={{flex:1}}>
                            <Text style={{textAlign:'center',fontSize:19,color:'white',fontWeight:'bold'}}>Jumlah Meninggal</Text>
                            <Text style={{textAlign:'center',fontSize:19,color:'white'}}>{dataWorldDeath.value}</Text>
                        </View>
                        <View style={{flex:1}}>
                        <Text style={{textAlign:'center'}}><MaterialCommunityIcons name="emoticon-sad" color='white' size={80} /></Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

