import React from 'react'
import { View, Text } from 'react-native'

import styles from '../../assets/styles/otherStyles'
import commonStyles from '../../assets/styles/commonStyles'

export default props => {
    return (
        <View marginBottom={10}>
            <View style={styles.lineContainer} justifyContent={'space-between'} marginBottom={0}>
                <View style={styles.componenteItemLeft}>
                    <Text style={styles.inlineItemInfo}>{props.quantidade +'x '+ props.nome}</Text>
                    {props.observacao ? <Text style={styles.inlineItemInfo}>{props.observacao}</Text> : null}
                </View>
                <View style={styles.componenteItemRight}>
                    <Text style={styles.inlineItemInfoR}>{floatToReais(props.valor_total)}</Text>
                </View>
            </View>
          <View style={styles.thinRedLine}/>
        </View>
    )
}

function floatToReais(numero) {
    var numero = parseFloat(numero).toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}