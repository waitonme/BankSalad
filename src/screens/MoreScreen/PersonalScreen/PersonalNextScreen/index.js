import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SectionList,


} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-community/async-storage';

class PersonalScreen extends Component {

    buttonStyle = (item) => {
        switch (item) {
            case '이름':
                return [styles.bottonText, { fontSize: 21 }];
            default:
                return styles.bottonText;
        }
    }


    onPressHandler = ({ item }) => {
        switch (item) {
            case '회원 탈퇴':
                AsyncStorage.removeItem('@user_token')
                break;

            default:
                console.log(item)
        }
    }

    render() {


        return (
            <View style={styles.main} >
                <SectionList style={styles.section}
                    scrollEnabled={false}
                    renderItem={({ item, index, section }) =>
                        <TouchableOpacity style={item === '앱 데이터 초기화' || item === '앱 잠금 비밀번호 변경' || item === '이름 변경' ? [styles.button, { borderTopWidth: 1 }] : styles.button} activeOpacity={0.5}>
                            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                                <Text style={this.buttonStyle(item)}>{item}
                                    {item === '앱 데이터 초기화' ? < Text style={{ color: 'rgb(172,172,172)', fontSize: 14, lineHeight: 23 }}>{"\n"}연동 금융사, 기계부 내역 등 모든 데이터 초기화</Text> : undefined}
                                </Text>
                                <Icon style={{ marginLeft: "auto", marginTop: "auto", marginBottom: "auto", color: 'rgb(172,172,172)' }} name="right" />
                            </View>

                        </TouchableOpacity>
                    }

                    renderSectionHeader={({ section }) => {
                        const { index } = section;
                        switch (index) {
                            case 0:
                                return <View style={{ height: "8%" }}></View>;
                            case 1:
                                return <View style={{ paddingLeft: "5%", paddingTop: "7%", paddingBottom: "1%" }}><Text style={{ fontSize: 14, color: 'rgb(125,125,125)' }}>계정 관리 </Text></View>
                            case 2:
                                return <View style={{ paddingLeft: "5%", paddingTop: "7%", paddingBottom: "1%" }}><Text style={{ fontSize: 14, color: 'rgb(125,125,125)' }}>데이터 </Text></View>
                        }
                    }}

                    sections={
                        [
                            { index: 0, data: ['앱 잠금 비밀번호 변경', 'Touch ID 사용'] },
                            { index: 1, title: '계정 관리', data: ['이름 변경', '회원 탈퇴'] },
                            { index: 2, title: '데이터', data: ['앱 데이터 초기화'] },
                        ]}
                    keyExtractor={(item, index) => item + index}
                />


            </View >
        )
    }
}




const styles = StyleSheet.create({
    main: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#F5F5F5" },
    section: {
        width: "100%"
    },
    button: {
        borderBottomWidth: 1,
        borderColor: 'rgb(222,222,222)',
        padding: "5.5%",
        backgroundColor: 'white',

    },
    bottonText: {
        fontSize: 16,
    }
});

export default PersonalScreen;