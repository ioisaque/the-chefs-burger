import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

import { globalState } from '../../App';
import styles from '../../assets/styles/otherStyles';

export default props => {
    return (
        <View>
            <View style={styles.componente}>
                <Text style={styles.categoria}>{props.grupo}</Text>
            </View>
            <View style={styles.linha}></View>
        </View>
    )
}