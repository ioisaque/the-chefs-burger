import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

import moment from 'moment'
import 'moment/locale/pt-br'

import styles from '../../assets/styles/otherStyles';

export default props => {
    return (
        <View>
            <View style={styles.componente}>
                <View style={styles.horaio}>
                    <Text style={styles.modalidade}>{props.modalidade}</Text>
                    <Text style={styles.info}>Data: {moment(props.data_aula).format('DD/MM/YY')}</Text>
                    <Text style={styles.info}>Horário: {moment(props.data_aula + ' ' + props.hora_aula).format('HH:mm')}</Text>
                    <Text style={styles.prof}>Professor: {props.professor}</Text>
                </View>
                <View>
                    <Text style={styles.status}>{this.getStatusText(props.aluno_ativo, props.vagas)}</Text>
                    <View style={styles.componente}>
                        <TouchableOpacity onPress={() => {
                            console.log('RUNNING => @toggleConfirmationDialog(props)', toggleConfirmationDialog)
                            
                            toggleConfirmationDialog(props)
                                
                            }} style={getBtnColor(props.aluno_ativo, props.vagas)}>
                            <Text style={styles.btnTxt}>{this.getActionText(props.aluno_ativo, props.vagas)}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.linha}></View>
        </View>
    )
}