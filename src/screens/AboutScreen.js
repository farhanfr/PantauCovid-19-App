import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {AboutComponent} from '../components'

export default class AboutScreen extends Component {
    render() {
        return (
            <AboutComponent navigation={this.props.navigation}/>
        )
    }
}

