import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class FinancialSecretaryScreen extends Component {
    render() {
        return (
            <View style={styles.main} >
                <Text>FinancialSecretary</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    main: { flex: 1, justifyContent: 'center', alignItems: 'center',    }
    //backgroundColor: 'white'
});

export default FinancialSecretaryScreen;