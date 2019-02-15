import React from 'react'
import { View, Text } from 'react-native'

import styles from '../../assets/styles/otherStyles'

export default props => {
    return (
        <View marginBottom={0}>
            <View style={styles.lineContainer} justifyContent={'space-between'} marginBottom={0}>
                <View style={styles.componenteItemLeft} width={'50%'}>
                    <Text style={styles.inlineItemInfo}>{'#'+props.id_pedido}</Text>
                </View>
                <View style={styles.componenteItemRight} width={'50%'}>
                    <Text style={styles.inlineItemInfoR}>{props.data_pedido}</Text>
                </View>
            </View>
          <View style={styles.thinRedLine}/>
        </View>
    )
}