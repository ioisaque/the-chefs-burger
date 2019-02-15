import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, ScrollView, StatusBar, Text, TextInput, Image, TouchableOpacity } from 'react-native'

import '../lib/auxFunctions'
import {globalState} from '../App'
import styles from '../assets/styles/otherStyles'
import commonStyles from '../assets/styles/commonStyles'

export default class Cardapio extends Component{
    
    static navigationOptions = {
      header: null,
      headerLeft: (null),
      headerTitle: (null),
      headerRight: (null)
    }

    constructor(props) {
      super(props)

      this.state = {
        itemQTD: globalState.cardapio.selectedItem.quantidade,
        itemTotal: globalState.cardapio.selectedItem.valor,
        itemObs: ''
      }
    }

    render () {     
      //console.log('#=> Navigated to Produto.')
      const { navigate } = this.props.navigation;

        return( 
            <View style={styles.perfilContainer}>
                <StatusBar barStyle="dark-content"/>
                <Image style={styles.logoBG} source={{uri: globalState.cardapio.selectedItem.imagem}}/>

                <View style={styles.topHeader}>
                    <View style={styles.inlineFlexRowBetween}>
                        <TouchableOpacity style={styles.refreshButton} onPress={() => navigate('Cardapio')}>
                            <Icon name="arrow-left" color={commonStyles.colors.white} size={20}/>
                        </TouchableOpacity>

                        <Text style={styles.welcomeSubText}>{globalState.cardapio.selectedItem.nome}</Text>
                    </View>
                </View>

                <ScrollView style={styles.pageBody}>
                    <View style={styles.lineContainer} justifyContent={'space-between'}>
                        <Text style={styles.inlineItemInfo} textAlign={'center'}>{globalState.cardapio.selectedItem.descricao}</Text>
                    </View>
                    <View style={styles.lineContainer} justifyContent={'space-between'}>
                        <View style={styles.componenteItemLeft} width={'50%'}>
                            <Text style={styles.inlineItemTitle}>Valor: </Text>
                        </View>
                        <View style={styles.componenteItemRight} width={'50%'}>
                            <Text style={styles.inlineItemPrice}>{floatToReais(this.state.itemTotal)}</Text>
                        </View>
                    </View>
                    <View style={styles.lineContainer} justifyContent={'space-between'}>
                        <View style={styles.componenteItemLeft} width={'45%'}>
                            <Text style={styles.inlineItemTitle}>Quantidade: </Text>
                        </View>
                            <TouchableOpacity style={styles.refreshButton} onPress={() => this.UpdateItemInfo(--this.state.itemQTD)}>
                                <Icon name="minus" color={commonStyles.colors.danger} size={20}/>
                            </TouchableOpacity>

                            <Text style={styles.inlineItemPrice}>{this.state.itemQTD.twoDigits()}</Text>

                            <TouchableOpacity style={styles.refreshButton} onPress={() => this.UpdateItemInfo(++this.state.itemQTD)}>
                                <Icon name="plus" color={commonStyles.colors.success} size={20}/>
                            </TouchableOpacity>
                    </View>
                    <View style={styles.lineContainer} marginBottom={0}>
                        <Text style={styles.inlineItemInfo} textAlign={'center'}>Observação</Text>
                    </View>
                    <View style={styles.lineContainer}>
                        <TextInput style={styles.inlineItemInfo} multiline={true} onChangeText={text => this.setState({itemObs: text})} placeholder={'Se desejar adicione algo aqui...'}/>
                    </View>
                </ScrollView>

                <View style={styles.navBarBottom}>
                    <TouchableOpacity style={styles.tabButtonSucess} onPress={() => this.addItemToCarrinho()}>
                        <Text style={styles.tabButtonText} textAlign={'center'}>CONTINUAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabButtonDanger} onPress={() => navigate('Categorias')}>
                        <Text style={styles.tabButtonText} textAlign={'center'}>CANCELAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    addItemToCarrinho = () => {
        console.log('RUNNING => @addItemToCarrinho => ', globalState.cardapio.selectedItem.nome)
        
        globalState.cardapio.selectedItem.quantidade = this.state.itemQTD
        globalState.cardapio.selectedItem.observacao = this.state.itemObs
        globalState.cardapio.selectedItem.valor_total = this.state.itemTotal
        globalState.usuario.carrinho.valor_total += parseFloat(this.state.itemTotal)

        globalState.usuario.carrinho.items.push(globalState.cardapio.selectedItem)
  
        const { navigate } = this.props.navigation;
        navigate('Carrinho')
    }

    UpdateItemInfo = (quantidade, desc = this.state.itemObs) => {
        console.log('UPDATED item => ', this.state.itemQTD, globalState.cardapio.selectedItem.nome)

        this.setState({
            itemQTD: quantidade > 0 ? quantidade : 0,
            itemObs: desc
        })
        const total = this.state.itemQTD * globalState.cardapio.selectedItem.valor
        this.setState({itemTotal: total > 0 ? total: 0})
    }
}

function floatToReais(numero) {
    var numero = parseFloat(numero).toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}