import React, { Component } from 'react';
import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native';
import { color } from '../../configs';
export default class Splash extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('HomeStack');
        }, 500);
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color={color.themeBackgroundColor} size='small' />
            </SafeAreaView>
        );
    }
}