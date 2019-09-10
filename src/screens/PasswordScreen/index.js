import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import PinView from 'react-native-pin-view';

class Passwordscreen extends Component {
    default

    render() {
        const name = this.props.navigation.getParam('name', 'no name');
        const phoneNum = this.props.navigation.getParam('phonenum', 'no phonenum');
        const userToken = this.props.navigation.getParam('userToken', undefined);
        return (
            <View style={styles.main} >
                <Text style={styles.title}>{userToken ? "비밀번호 인증" : "비밀번호 설정"}</Text>
                <Text style={styles.subtitle}>{userToken ? "간편암호 입력" : "앱에서 사용할 간편암호를 입력하세요"}</Text>
                <PinView
                    onComplete={(val, clear) => { alert(val) }}
                    pinLength={6}
                    buttonBgColor="rgb(69, 203, 149)"
                    buttonTextColor="white"
                    inputBgColor="rgb(69, 203, 149)"
                    inputActiveBgColor="white"
                    inputBgOpacity={1}
                    inputViewStyle={{ borderWidth: 1, borderColor: 'white', height: 15, width: 15, margin: "2%" }}
                    keyboardContainerStyle={{ marginTop: "15%" }}
                    keyboardViewTextStyle={{ fontWeight: "normal", fontSize: 30 }}
                    buttonDeletePosition="right"
                    deleteText="←"
                />
            </View>
        )
    }
}

Passwordscreen.defaultProps = {
    navigation: {
        getparam(a, b) { return null }
    }
}

const styles = StyleSheet.create({
    main: { display: 'flex', flex: 1, justifyContent: 'center', backgroundColor: "rgb(69,203,149)", },
    title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'white', marginBottom: "5%", marginTop: "5%" },
    subtitle: { textAlign: 'center', color: 'white', marginBottom: "5%" }
});

export default Passwordscreen;