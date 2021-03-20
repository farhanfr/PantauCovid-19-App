import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { dangerColor, warningColor, successColor } from '../../const/color'

export default class HomeLocalRegionComponent extends Component {
    render() {
        const { dataLocal } = this.props
        console.log(dataLocal)
        return (
            <ScrollView>
                <View style={{ paddingHorizontal: 15, paddingVertical: 12 }}>
                    <View style={{ backgroundColor: successColor, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 30, paddingHorizontal: 10, shadowColor: 'black', elevation: 5 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', fontSize: 19, color: 'white', fontWeight: 'bold' }}>Jumlah Sembuh</Text>
                            <Text style={{ textAlign: 'center', fontSize: 19, color: 'white' }}>{dataLocal[0].sembuh}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center' }}><MaterialCommunityIcons name="emoticon-happy" color='white' size={80} /></Text>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 15, paddingVertical: 12 }}>
                    <View style={{ backgroundColor: warningColor, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 30, paddingHorizontal: 10, shadowColor: 'black', elevation: 5 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', fontSize: 19, color: 'white', fontWeight: 'bold' }}>Jumlah Positif</Text>
                            <Text style={{ textAlign: 'center', fontSize: 19, color: 'white' }}>{dataLocal[0].positif}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center' }}><Icon name="sad" color='white' size={80} /></Text>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 15, paddingVertical: 12 }}>
                    <View style={{ backgroundColor: dangerColor, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 30, paddingHorizontal: 10, shadowColor: 'black', elevation: 5 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', fontSize: 19, color: 'white', fontWeight: 'bold' }}>Jumlah Meninggal</Text>
                            <Text style={{ textAlign: 'center', fontSize: 19, color: 'white' }}>{dataLocal[0].meninggal}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center' }}><MaterialCommunityIcons name="emoticon-sad" color='white' size={80} /></Text>
                        </View>
                    </View>
                </View>

                {/* Data provinsi */}
                <View style={{ paddingHorizontal: 15,paddingVertical:10}}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#34495e' }}>Data Provinsi</Text>

                    <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginTop: 15 }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontSize: 13, fontWeight: "bold" }}>Provinsi</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 13, fontWeight: "bold",textAlign:'center' }}>Positif</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 13, fontWeight: "bold",textAlign:'center'}}>Sembuh</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 13, fontWeight: "bold",textAlign:'center' }}>Meninggal</Text>
                        </View>
                    </View>
                    {this.props.dataLocalProvince.map((listDataProvince) => {
                        return (
                            <View key={listDataProvince.attributes.FID}>
                            <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 ,paddingVertical:10}}>
                                <View style={{ flex: 2 }}>
                                    <Text style={{ fontSize: 13}}>{listDataProvince.attributes.Provinsi}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 13,textAlign:'center'}}>{listDataProvince.attributes.Kasus_Posi}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 13,textAlign:'center'}}>{listDataProvince.attributes.Kasus_Semb}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 13,textAlign:'center'}}>{listDataProvince.attributes.Kasus_Meni}</Text>
                                </View>
                            </View>
                            <View style={{borderBottomColor: '#CFCFCF',borderBottomWidth: 1}}/>
                            </View>
                        )
                    })}
                </View>
                {/* <View style={{paddingHorizontal:15}}>
                    <Text style={{fontSize:24,fontWeight:'bold',color:'#34495e'}}>Data Provinsi</Text>
                <ScrollView horizontal style ={{backgroundColor:'white',marginTop:15,paddingHorizontal:10,flex:1}}>
                    <View style={{backgroundColor:'white',paddingRight:100}}>
                        <Text style={{fontSize:18}}>Provinsi</Text>
                        <Text>Aceh</Text>
                    </View>
                    <View style={{backgroundColor:'white',paddingHorizontal:15}}>
                        <Text style={{textAlign:'center',fontSize:18}}>Positif</Text>
                        <Text style={{textAlign:'center'}}>Aceh</Text>
                    </View>
                    <View style={{backgroundColor:'white',paddingHorizontal:15}}>
                        <Text style={{textAlign:'center',fontSize:18}}>Sembuh</Text>
                        <Text style={{textAlign:'center'}}>Aceh</Text>
                    </View>
                    <View style={{backgroundColor:'white',paddingHorizontal:15}}>
                        <Text style={{textAlign:'center',fontSize:18}}>Meninggal</Text>
                        <Text style={{textAlign:'center'}}>Aceh</Text>
                    </View>
                </ScrollView>
                </View> */}
            </ScrollView>
        )
    }
}


