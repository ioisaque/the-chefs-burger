import React from 'react'
import { View, Text } from 'react-native';

import styles from '../../assets/styles/otherStyles';

export default props => {
    return (
        <View style={styles.lineContainer}>
            <Text style={styles.inlineItemTitle}>{props.grupo}</Text>
        </View>
    )
}