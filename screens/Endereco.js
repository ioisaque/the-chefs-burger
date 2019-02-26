import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, ScrollView, StatusBar, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native'

import moment from 'moment'
import 'moment/locale/pt-br'

import {globalState} from '../App'
import styles from '../assets/styles/otherStyles'
import commonStyles from '../assets/styles/commonStyles'

import KeyboardShift from './components/KeyboardShift'

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
        name: '',
        celular: '',
        endereco: '',
        numero: '',
        complemento: '',
      }
    }

    render () {     
      //console.log('#=> Navigated to Cardapio.')
      const { navigate } = this.props.navigation;

        return(
          <KeyboardShift>
          {() => (
            <View style={styles.perfilContainer}>
              <StatusBar barStyle="dark-content"/>
              <Image style={styles.logoBG} source={require('../assets/logo-bg.png')}/>

              <View style={styles.topHeader}>            

                <View style={styles.inlineFlexRowBetween}>
                  <TouchableOpacity style={styles.refreshButton} onPress={() => navigate('Categorias')}>
                    <Icon name="arrow-left" color={commonStyles.colors.white} size={20}/>
                  </TouchableOpacity>

                  <Text style={styles.welcomeSubText}>Entrega</Text>
                </View>
              </View>

              <ScrollView style={styles.pageBody}>

                <View style={styles.lineContainer} justifyContent={'space-between'}>
                  <View style={styles.componenteItemLeft} width={'30%'}>
                    <Text style={styles.inlineItemTitle}>Nome: </Text>
                  </View>
                  <View style={styles.componenteItemRight} width={'70%'}>
                    <TextInput style={styles.inputText} onChangeText={text => this.setState({name: text})} placeholder={'Quem irá receber.'} keyboardType={'name-celular-pad'}/>
                  </View>
                </View>

                <View style={styles.lineContainer} justifyContent={'space-between'}>
                  <View style={styles.componenteItemLeft} width={'30%'}>
                    <Text style={styles.inlineItemTitle}>Celular: </Text>
                  </View>
                  <View style={styles.componenteItemRight} width={'70%'}>
                    <TextInput style={styles.inputText} onChangeText={text => this.setState({celular: text})} placeholder={'(XX) X XXXX XXXX'} keyboardType={'numeric'}/>
                  </View>
                </View>

                <View style={styles.lineContainer} justifyContent={'space-between'}>
                  <View style={styles.componenteItemLeft} width={'30%'}>
                    <Text style={styles.inlineItemTitle}>Endereço: </Text>
                  </View>
                  <View style={styles.componenteItemRight} width={'70%'}>
                    <TextInput style={styles.inputText} onChangeText={text => this.setState({endereco: text})} placeholder={'Rua/Av'} keyboardType={'name-phone-pad'}/>
                  </View>
                </View>

                <View style={styles.lineContainer} justifyContent={'space-between'}>
                  <View style={styles.componenteItemLeft} width={'30%'}>
                    <Text style={styles.inlineItemTitle}>Número: </Text>
                  </View>
                  <View style={styles.componenteItemRight} width={'70%'}>
                    <TextInput style={styles.inputText} onChangeText={text => this.setState({numero: text})} keyboardType={'numeric'}/>
                  </View>
                </View>

                <View style={styles.lineContainer} justifyContent={'space-between'}>
                  <View style={styles.componenteItemLeft} width={'30%'}>
                    <Text style={styles.inlineItemTitle}>Comple.: </Text>
                  </View>
                  <View style={styles.componenteItemRight} width={'70%'}>
                    <TextInput style={styles.inputText} onChangeText={text => this.setState({complemento: text})}/>
                  </View>
                </View>

              </ScrollView>
              <View style={styles.navBarBottom}>
                  <TouchableOpacity style={styles.tabButtonUnique} onPress={() => this.confirmOrder()}>
                      <Text style={styles.tabButtonText} textAlign={'center'}>CONFIRMAR</Text>
                  </TouchableOpacity>
              </View>
            </View>
          )}
          </KeyboardShift>
        ) 
    }

    printOrderResult = (result) => {
      console.log('RUNNING => @printOrderResult()', result)

      const { navigate } = this.props.navigation;
      navigate('Categorias')
      
      if (result.status != 'Sucesso')
        Alert.alert('Ocorreu um erro ao tentar fazer seu pedido, tente novamente...')
      else{
        Alert.alert('Pedido realizado com sucesso!')
        
        newPedido = new Object()
        newPedido = {
          id_pedido: result.id_pedido,
          data_pedido: moment().format('DD/MM/YY'),
          items: globalState.usuario.carrinho.items
        }
        globalState.usuario.historico.pedidos.push(newPedido)

        globalState.usuario.carrinho = {
          items: [],
          valor_total: 0
        }
        globalState.usuario.pedido = {
          items: [],
          entrega: {
            tipo: '',
            nome: '',
            celular: '',
            
              endereco: '',
              numero: '',
              bairro: '',
              complemento: ''
          },
          pagamento_em: '',
          valor_total: 0
        }
      }
    }

    confirmOrder = () => {
      console.log('RUNNING => @confirmOrder()')
      
      globalState.usuario.pedido.entrega.nome = this.state.name
      globalState.usuario.pedido.entrega.celular = this.state.celular
      globalState.usuario.pedido.entrega.endereco = this.state.endereco
      globalState.usuario.pedido.entrega.numero = this.state.numero
      globalState.usuario.pedido.entrega.complemento = this.state.complemento

      console.log('PEDIDO ==> ', globalState.usuario.pedido)
      console.log('REQUISIÇÃO ==> ', JSON.stringify({
        produtos:       globalState.usuario.pedido.items,
        nome:           globalState.usuario.pedido.entrega.nome,
        telefone:       globalState.usuario.pedido.entrega.celular,
        endereco:       globalState.usuario.pedido.entrega.endereco,
        numero:         globalState.usuario.pedido.entrega.numero,
        complemento:    globalState.usuario.pedido.entrega.complemento,
        bairro:         globalState.usuario.pedido.entrega.bairro,
        cidade:         '',
        pagamento:      globalState.usuario.pedido.pagamento_em,
        datahora:       '2019-02-15 10:15' 
      }))
      
      makeOrder( this.printOrderResult )
    }
};

async function makeOrder( callback ) {
  console.log('RUNNING => @makeOrder()')
  console.log('PEDIDO ==> ', globalState.usuario.pedido)
  
  await fetch('http://sistema.thechefsburger.com.br/webservices/pedidos.php?json='+JSON.stringify({
      produtos:       globalState.usuario.pedido.items,
      nome:           globalState.usuario.pedido.entrega.nome,
      telefone:       globalState.usuario.pedido.entrega.celular,
      endereco:       globalState.usuario.pedido.entrega.endereco,
      numero:         globalState.usuario.pedido.entrega.numero,
      complemento:    globalState.usuario.pedido.entrega.complemento,
      bairro:         globalState.usuario.pedido.entrega.bairro,
      pagamento:      globalState.usuario.pedido.pagamento_em,
      datahora:       new Date()
    })).then((response) => {
    return response.json()
  }).then((responseJson) => {
      callback(responseJson)
    })
    .catch((error) => {
      console.error(error)
  });
};