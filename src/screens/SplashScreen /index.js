import React, { Component } from 'react';
import {
    View,
    Animated,
    StyleSheet
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

class SplashScreen extends Component {

    constructor() {
        //to-dos
        /*
            if has no userId info (need to sign-in)
                navigate -> Auth
            else (has userId info)
                navigate -> Password

            we need to check out user has a id, here
        */
        super();

        this.spinValue = new Animated.Value(0);
    }


    componentDidMount() {
        this._rotate90();
        this._bootstrapAsync();
    }


    _bootstrapAsync = async () => {
        try {
            const userToken = await AsyncStorage.getItem('@user_token')
            setTimeout(() =>
                this.props.navigation.navigate(userToken ? 'Password' : 'Auth', { params: { userToken } }), 2500);
        } catch (e) {
            console.log(e)
        }
    };

    _rotate90() {
        this.spinValue.setValue(0)

        Animated.timing(
            this.spinValue, {
            toValue: 1,
            duration: 1000,
            delay: 500
        }).start();
    }



    _getStyle() {
        return {
            width: 120, height: 120,
            transform: [
                {
                    rotate: this.spinValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '109deg']
                    })
                },
            ]
        }
    }


    render() {

        return (
            <View style={styles.main} >
                <Animated.Image
                    style={this._getStyle()}
                    source={require('../../../img/Icon.png')} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    main: {
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#45CA93'
    }
});

export default SplashScreen;