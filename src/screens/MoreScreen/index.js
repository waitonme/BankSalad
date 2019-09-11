import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SectionList,


} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/AntDesign'

import PersonalScreen from './PersonalScreen/';
import PersonalNextScreen from './PersonalScreen/PersonalNextScreen';

class MoreScreen extends Component {

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
            case '이름':
                this.props.navigation.push('PersonalScreen');
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
                        <TouchableOpacity onPress={() => this.onPressHandler({ item })} style={item == '고객센터' ? [styles.button, { borderTopWidth: 1 }] : styles.button} activeOpacity={0.5}>
                            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                                <Text style={this.buttonStyle(item)}>{item}
                                    {index === 0 && item == '이름' ? < Text style={{ color: 'rgb(172,172,172)', fontSize: 14, lineHeight: 25 }}>{"\n"}개인설정, 서비스 설정</Text> : undefined}
                                </Text>
                                <Icon style={{ marginLeft: "auto", marginTop: "auto", marginBottom: "auto", color: 'rgb(172,172,172)' }} name="right" />
                            </View>

                        </TouchableOpacity>
                    }

                    renderSectionHeader={({ section }) => {
                        const { index } = section;
                        switch (index) {
                            case 0:
                                return;
                            case 1:
                                return <View style={{ height: 10 }}></View>
                        }
                    }}
                    sections={
                        [
                            { index: 0, data: ['이름', '연동관리', '데이터공유하기'] },
                            { index: 1, title: 'Title2', data: ['고객센터'] },
                            // { title: 'Title3', data: ['item5', 'item6'] },
                        ]}
                    keyExtractor={(item, index) => item + index}
                />


            </View >
        )
    }
}


const MoreScreenStack = createStackNavigator(
    {
        MoreScreen: {
            screen: MoreScreen,

            navigationOptions: () => ({
                headerStyle: {
                    backgroundColor: '#F5F5F5',
                },

                headerTitleStyle: {
                    fontWeight: 'bold',
                },

                title: "더보기",
            })
        },
        PersonalScreen: {
            screen: PersonalScreen,
            navigationOptions: () => ({
                headerStyle: {
                    backgroundColor: '#F5F5F5',
                },

                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'black'
                },
                headerTintColor: "#45CA93",
                title: "개인 설정",
            })
        },
        PersonalNextScreen: {
            screen: PersonalNextScreen,
            navigationOptions: () => ({
                headerStyle: {
                    backgroundColor: '#F5F5F5',
                },

                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'black'
                },
                headerTintColor: "#45CA93",
                title: "개인 설정",
            })
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({

        }),
        initialRouteName: 'MoreScreen'
    }
);


const styles = StyleSheet.create({
    main: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#F5F5F5" },
    section: {
        width: "100%"
    },
    button: {
        borderBottomWidth: 1,
        borderColor: 'rgb(222,222,222)',
        padding: "6%",
        backgroundColor: 'white',

    },
    bottonText: {
        fontSize: 16,
    }
});

export default MoreScreenStack;