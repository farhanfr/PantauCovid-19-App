import React, { Component } from 'react'
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native'

import {dataIndonesiaServices} from '../api/services'
import {HomeLocalRegionComponent} from '../components'
import { dangerColor, successColor } from '../const/color'

export default class LocalRegionScreen extends Component {
    constructor(props) {
        super(props)
        this.state={
            dataLocal:[],
            dataLocalProvince:[],
            isLoading1:true,
            isLoading2:true
        }
    }

    getDataIndonesia = () =>{
        const{getAll}=dataIndonesiaServices()
        const result = getAll()
        .then((res) => {
            // console.log(res.data)
            this.setState({dataLocal:res.data})
            this.setState({isLoading1:false})
        }).catch((err) => {
            console.log(err)
        });
    }

    getDataIndonesiaProvince = () =>{
        const{getAllProvince}=dataIndonesiaServices()
        const result = getAllProvince()
        .then((res) => {
            // console.log(res.data)
            this.setState({dataLocalProvince:res.data})
            this.setState({isLoading2:false})
        }).catch((err) => {
            console.log(err)
        });
    }

    _isMounted=false
    componentDidMount(){
        this._isMounted=true
        if (this._isMounted === true) {
            this.getDataIndonesia()
            this.getDataIndonesiaProvince()
        }
    }

    componentWillUnmount(){
        this._isMounted=false
        console.log("will unmount local")
    }
    
    render() {
        return (
            this.state.isLoading1 ? <ActivityIndicator size="large" color={dangerColor} style={{flex:1,justifyContent:'center'}} /> :
            this.state.isLoading2 ? <ActivityIndicator size="large" color={dangerColor} style={{flex:1,justifyContent:'center'}} /> :
            <SafeAreaView>
                <HomeLocalRegionComponent dataLocal={this.state.dataLocal} dataLocalProvince={this.state.dataLocalProvince}/>
            </SafeAreaView>
        )
    }
}

