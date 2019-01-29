import React from 'react'
import { View, Text } from 'react-native';
import styles from '../../assets/styles/otherStyles';

export default props => {
    return (
        <View style={styles.lineContainer} justifyContent={'space-between'}>
            <View style={styles.componenteItemLeft}>
                <Text style={styles.inlineItemTitle}>{props.nome}</Text>
                {props.descricao ? <Text style={styles.info}>{props.descricao}</Text> : null}
            </View>
            <View style={styles.componenteItemRight}>
                <Text style={styles.inlineItemPrice}>{props.valor_venda}</Text>
            </View>
        </View>
    )
}