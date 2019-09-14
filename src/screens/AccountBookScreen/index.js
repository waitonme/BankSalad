import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class AccountBookScreen extends Component {
    render() {
        return (
            <View style={styles.main} >
                <Text>AccountBook</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    main: { flex: 1, justifyContent: 'center', alignItems: 'center' ,   backgroundColor: 'white'}
});

export default AccountBookScreen;