import React, { Component } from 'react'
import { Text, View } from 'react-native'
import WebView from 'react-native-webview'

export default class WebViewScreen extends Component {
    render() {
        return <WebView source={{uri:'https://kawalcorona.com/api/'}}/>
    }
}

