import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, TouchableOpacity } from 'react-native'

import commonStyles from '../../assets/styles/commonStyles'
import styles from '../../assets/styles/otherStyles'
import { globalState } from '../../App'

export default class ItemDetails extends Component {

    constructor(props) {
        super(props)
  
        this.state = {
          count: globalState.cardapio.selectedItem.quantidade
        }
      }

    render() {
        return (
            <View>
                <View style={styles.lineContainer} justifyContent={'space-between'}>
                    <Text style={styles.inlineItemInfo} textAlign={'center'}>{props.descricao}</Text>
                </View>
                <View style={styles.lineContainer} justifyContent={'space-between'}>
                    <View style={styles.componenteItemLeft}>
                        <Text style={styles.inlineItemTitle}>Quantidade: </Text>
                    </View>
                    <View style={styles.componenteItemRight}>
                        <View style={styles.lineContainer} backgroundColor={null}>
                            <TouchableOpacity style={styles.refreshButton} onPress={() => globalState.cardapio.selectedItem.quantidade--}>
                                <Icon name="minus" color={commonStyles.colors.danger} size={20}/>
                            </TouchableOpacity>
    
                                <Text style={styles.inlineItemPrice}>{}</Text>
    
                            <TouchableOpacity style={styles.refreshButton} onPress={() => {
                                console.log('globalState.cardapio.selectedItem.quantidade => ', globalState.cardapio.selectedItem.quantidade)
                                globalState.cardapio.selectedItem.quantidade++
                                console.log('globalState.cardapio.selectedItem.quantidade => ', globalState.cardapio.selectedItem.quantidade)
                            }}>
                                <Icon name="plus" color={commonStyles.colors.success} size={20}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
