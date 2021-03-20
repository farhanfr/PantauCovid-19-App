import React, { Component } from 'react'
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native'

import {dataWorldServices} from '../api/services'
import {HomeWorldRegionComponents} from '../components'
import { successColor } from '../const/color'

export class WorldRegionScreen extends Component {

    constructor(props) {
        super(props)
        this.state={
            dataWorldPositive:{},
            dataWorldRecovery:{},
            dataWorldDeath:{},
            isLoading:true
        }
    }

    getDataWorldPositive = () =>{
        const{getPositive}=dataWorldServices()
        const result = getPositive()
        .then((res) => {
            // console.log(res.data)
            this.setState({dataWorldPositive:res.data})
            this.setState({isLoading:false})
        }).catch((err) => {
            console.log(err)
        });
    }

    getDataWorldRecovery = () =>{
        const{getRecovery}=dataWorldServices()
        const result = getRecovery()
        .then((res) => {
            // console.log(res.data)
            this.setState({dataWorldRecovery:res.data})
            this.setState({isLoading:false})
        }).catch((err) => {
            console.log(err)
        });
    }

    getDataWorldDeath = () =>{
        const{getDeath}=dataWorldServices()
        const result = getDeath()
        .then((res) => {
            // console.log(res.data)
            this.setState({dataWorldDeath:res.data})
            this.setState({isLoading:false})
        }).catch((err) => {
            console.log(err)
        });
    }

    _isMounted=false
    componentDidMount(){
        this._isMounted=true
        if (this._isMounted === true) {
            this.getDataWorldRecovery()
            this.getDataWorldPositive()
            this.getDataWorldDeath()
        }
    }

    componentWillUnmount(){
        this._isMounted=false
    }

    render() {
        return (
            this.state.isLoading ? <ActivityIndicator size="large" color={successColor} style={{flex:1,justifyContent:'center'}} /> :
            <SafeAreaView>
                <HomeWorldRegionComponents 
                dataWorldPositive={this.state.dataWorldPositive}
                dataWorldRecovery={this.state.dataWorldRecovery}
                dataWorldDeath={this.state.dataWorldDeath}
                />
            </SafeAreaView>
        )
    }
}

export default WorldRegionScreen
