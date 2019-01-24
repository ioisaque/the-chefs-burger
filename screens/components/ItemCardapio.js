import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

import { globalState } from '../../App';
import styles from '../../assets/styles/otherStyles';

export default props => {
    return (
        <View>
            <View style={styles.componente}>
                <View alignSelf={'flex-start'}>
                    <Text style={styles.componenteInfo}>{props.nome}</Text>
                </View>
                <View alignSelf={'flex-end'}>
                    <Text style={styles.componenteInfo}>{props.valor_venda}</Text>
                </View>
            </View>
            <View style={styles.linha}></View>
        </View>
    )
}