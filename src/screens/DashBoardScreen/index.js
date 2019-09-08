import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class DashBoardScreen extends Component {
    render() {
        return (
            <View style={styles.main} >
                <Text>DashBoard</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    main: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default DashBoardScreen;