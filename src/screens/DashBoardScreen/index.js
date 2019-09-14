import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SectionList,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { TouchableHighlight } from 'react-native-gesture-handler';

class DashBoardScreen extends Component {
    render() {
        return (
            <View style={styles.main} >
                <View>
                    <View style={{ flex: 1 }}>
                        <Text>이름님의 순자산</Text>
                        <TouchableHighlight><Text>자산추가</Text></TouchableHighlight>

                    </View>
                </View>

                <SectionList style={styles.section}
                    renderItem={({ item, index, section }) =>
                        <View>
                            <Text>{item}</Text>
                        </View>
                    }

                    renderSectionHeader={({ section }) => {
                        const { index } = section;
                    }}

                    sections={
                        [
                            { index: 0, title: '신용점수', data: ['신용도 영향없이'] },
                            { index: 1, title: '연금', data: ['지금까지 쌓인 내 연금'] },
                        ]}
                    keyExtractor={(item, index) => item + index}
                />


            </View >
        )
    }
}


const styles = StyleSheet.create({
    main: { flex: 1, justifyContent: 'center', alignItems: 'center', }
    // backgroundColor: '#F5F5F5'
});

const DashBoardStack = createStackNavigator({
    DashBoardScreen: {
        screen: DashBoardScreen,
        navigationOptions: () => ({
            headerStyle: {
                backgroundColor: '#F5F5F5',
            },

            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 14
            },

            title: "MY금융",
        })
    }
});


export default DashBoardStack;