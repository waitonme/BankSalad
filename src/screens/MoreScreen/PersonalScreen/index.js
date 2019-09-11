import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SectionList,


} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign'

class PersonalScreen extends Component {

    buttonStyle = (item) => {
        switch (item) {
            case '이름':
                return [styles.bottonText, { fontSize: 21 }];
            default:
                return styles.bottonText;
        }
    }

    render() {


        return (
            <View style={styles.main} >
                <SectionList style={styles.section}
                    scrollEnabled={false}
                    renderItem={({ item, index, section }) =>
                        <TouchableOpacity style={item === '개인 설정' || item === '공지사항' ? [styles.button, { borderTopWidth: 1 }] : styles.button} activeOpacity={0.5}>
                            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                                <Text style={this.buttonStyle(item)}>{item}</Text>
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
                                return <View style={{ paddingLeft: "5%", paddingTop: "7%" }}><Text style={{ fontSize: 14, color: 'rgb(125,125,125)' }}>정책 </Text></View>
                        }
                    }}

                    sections={
                        [
                            { index: 0, data: ['개인 설정', '서비스 설정'] },
                            { index: 1, title: '정책', data: ['공지사항', '이용약관', '개인정보 처리 방침', '오픈소스 라이센스 공지', '버전 정보'] },
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