import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from '../../assets/styles/otherStyles'
import commonStyles from '../../assets/styles/commonStyles'

export default props => {
    return (
        <View marginBottom={10}>
            <View style={styles.lineContainer} justifyContent={'space-between'} marginBottom={0}>
                <View style={styles.componenteItemLeft}>
                    <Text style={styles.inlineItemTitle}>{props.quantidade +'x '+ props.nome}</Text>
                    {props.observacao ? <Text style={styles.inlineItemInfo}>{props.observacao}</Text> : null}
                </View>
                <View style={styles.componenteItemRight}>
                    <Text style={styles.inlineItemPrice}>{floatToReais(props.quantidade*props.valor)}</Text>
                </View>
            </View>
            
            <TouchableOpacity style={styles.lineContainer} onPress={() => removeItemOfCarrinho(props)} marginBottom={0}>
                <Icon name="close" color={commonStyles.colors.primary} size={20}/>
                <Text style={styles.inlineItemRemoveText}>REMOVER</Text>
            </TouchableOpacity>
          <View style={styles.thinRedLine}/>
        </View>
    )
}

function floatToReais(numero) {
    var numero = parseFloat(numero).toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}