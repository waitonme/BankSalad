import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Animated,
    StyleSheet
} from 'react-native';


class SplashScreen extends Component {

    constructor() {
        super();
        setTimeout(() =>
            this.props.navigation.navigate('TabNavigator'), 2500)
        this.spinValue = new Animated.Value(0);
    }


    componentDidMount() {
        this._rotate90();
    }


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
                        outputRange: ['0deg', '90deg']
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

// const style = {
// .rotate - 90 - cw {
// 	-webkit - animation: rotate - 90 - cw 0.5s ease -in 0.2s both;
// animation: rotate - 90 - cw 0.5s ease -in 0.2s both;
// }

// @-webkit - keyframes rotate - 90 - cw {
//     0 % {
//       - webkit - transform: rotate(0);
//     transform: rotate(0);
// }
// 100 % {
//       - webkit - transform: rotate(90deg);
// transform: rotate(90deg);
//     }
//   }
// @keyframes rotate - 90 - cw {
//     0 % {
//       - webkit - transform: rotate(0);
//     transform: rotate(0);
// }
// 100 % {
//       - webkit - transform: rotate(90deg);
// transform: rotate(90deg);
//     }
//   }
// }
export default SplashScreen;