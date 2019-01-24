import React from 'react'
import { View, Text } from 'react-native';

import moment from 'moment'
import 'moment/locale/pt-br'

import styles from '../../assets/styles/otherStyles';

export default props => {  

    if (props.modalidade)
        return (
            <View style={styles.dialogContent}>
                <Text style={styles.dialogText}>{props.modalidade}</Text>
                <Text style={styles.dialogText}>Data: {moment(props.data_aula).format('DD/MM/YY')}</Text>
                <Text style={styles.dialogText}>Horário: {moment(props.data_aula + ' ' + props.hora_aula).format('HH:mm')}</Text>
                <Text style={styles.dialogText}>Professor: {props.professor}</Text>
            </View>
        )
    else
        return (<View></View>)
}