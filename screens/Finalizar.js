import React, {Component} from 'react'
import RNPickerSelect from 'react-native-picker-select'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, ScrollView, StatusBar, Text, TextInput, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'

import moment from 'moment'
import 'moment/locale/pt-br'

import {globalState} from '../App'
import styles from '../assets/styles/otherStyles'
import commonStyles from '../assets/styles/commonStyles'
import '../lib/auxFunctions'

export default class Cardapio extends Component{
    
    static navigationOptions = {
      header: null,
      headerLeft: (null),
      headerTitle: (null),
      headerRight: (null)
    }

    constructor(props) {
      super(props)

      this.inputRefs = {
        bairro: null,
        method: null,
        delivery: null,
      }

      this.state = {
        name: '',
        celular: '',
        isLoading: true,
        method: 'Dinheiro',
        bairro: 'Selecione...',
        delivery: 'BALCAO',
      }
    }

    render () {     
      console.log('#=> Navigated to Finalizar.')      
      const { navigate } = this.props.navigation;

      if (this.state.isLoading == true) {
        getTaxas(this.updateTaxas)
        
        return(
          <View style={styles.perfilContainer}>
            <StatusBar barStyle="dark-content" />            
            <Image style={styles.logoBG} source={require('../assets/logo-bg.png')}/>

            <View style={styles.topHeader}>
              <View style={styles.inlineFlexRowBetween}>
                <TouchableOpacity style={styles.refreshButton} onPress={() => navigate('Categorias')}>
                  <Icon name="arrow-left" color={commonStyles.colors.white} size={20}/>
                </TouchableOpacity>

                <Text style={styles.welcomeSubText}>ENTREGA</Text>
              </View>
            </View>

            <View style={styles.pageBodyOnLoading} >
              <ActivityIndicator size="large" color={commonStyles.colors.primary}/>
            </View>
          </View>
        )
      }else{
        return( 
          <View style={styles.perfilContainer}>
              <StatusBar barStyle="dark-content"/>
              <Image style={styles.logoBG} source={require('../assets/logo-bg.png')}/>

              <View style={styles.topHeader}>            

                <View style={styles.inlineFlexRowBetween}>
                  <TouchableOpacity style={styles.refreshButton} onPress={() => navigate('Categorias')}>
                    <Icon name="arrow-left" color={commonStyles.colors.white} size={20}/>
                  </TouchableOpacity>
                  <Text style={styles.welcomeSubText}>Finalizar Pedido</Text>
                </View>
              </View>

            <ScrollView style={styles.pageBody}>

              <View style={styles.lineContainer} justifyContent={'space-between'}>
                  <View style={styles.componenteItemLeft} width={'50%'}>
                      <Text style={styles.inlineItemTitle}>Pagamento em: </Text>
                  </View>
                  <View style={styles.componenteItemRight} width={'50%'}>
                    <RNPickerSelect
                        placeholder={{
                          label: 'Selecione...',
                          value: 'Selecione...',
                        }}
                        items={[{
                            label: 'Dinheiro',
                            value: 'Dinheiro',
                          },{
                            label: 'Cartão de Débito',
                            value: 'Cartão de Débito',
                          },{
                            label: 'Cartão de Crédito',
                            value: 'Cartão de Crédito',
                          }]
                        }
                        onValueChange={(value) => {
                          this.setState({
                            method: value,
                          });
                        }}
                        style={pickerSelectStyles}
                        value={this.state.method}
                        useNativeAndroidPickerStyle={false}
                        ref={(el) => {
                            this.inputRefs.method = el;
                        }}
                        placeholderTextColor={commonStyles.colors.primary}
                      />
                  </View>
              </View>

              <View style={styles.lineContainer} justifyContent={'space-between'}>
                  <View style={styles.componenteItemLeft} width={'50%'}>
                    <Text style={styles.inlineItemTitle}>Retirada: </Text>
                  </View>
                  <View style={styles.componenteItemRight} width={'50%'}>
                    <RNPickerSelect
                        placeholder={{
                          label: 'BALCÃO',
                          value: 'BALCAO',
                        }}
                        items={[{
                            label: 'ENTREGA',
                            value: 'ENTREGA',
                          }]
                        }
                        onValueChange={(value) => {
                            this.setState({
                              delivery: value,
                            });
                        }}
                        style={pickerSelectStyles}
                        value={this.state.delivery}
                        useNativeAndroidPickerStyle={false}
                        ref={(el) => {
                            this.inputRefs.delivery = el;
                        }}
                        placeholderTextColor={commonStyles.colors.primary}
                      />
                  </View>
              </View>

            { 
              (this.state.delivery == 'BALCAO') ?
                <View>
                  <View style={styles.lineContainer} justifyContent={'space-between'}>
                    <View style={styles.componenteItemLeft} width={'50%'}>
                      <Text style={styles.inlineItemTitle}>Nome: </Text>
                    </View>
                    <View style={styles.componenteItemRight} width={'50%'}>
                      <TextInput style={styles.inputText} onChangeText={text => this.setState({name: text})} placeholder={'Quem irá buscar.'} keyboardType={'name-phone-pad'}/>
                    </View>
                  </View>

                  <View style={styles.lineContainer} justifyContent={'space-between'}>
                    <View style={styles.componenteItemLeft} width={'50%'}>
                      <Text style={styles.inlineItemTitle}>Celular: </Text>
                    </View>
                    <View style={styles.componenteItemRight} width={'50%'}>
                      <TextInput style={styles.inputText} onChangeText={text => this.setState({celular: text})} placeholder={'(XX) X XXXX XXXX'} keyboardType={'numeric'}/>
                    </View>
                  </View>
                  </View>
              :
                null
            }
            { 
              (this.state.delivery == 'ENTREGA') ?

                <View style={styles.lineContainer} justifyContent={'space-between'}>
                  <View style={styles.componenteItemLeft} width={'50%'}>
                    <Text style={styles.inlineItemTitle}>Bairro: </Text>
                  </View>
                  <View style={styles.componenteItemRight} width={'50%'}>
                    <RNPickerSelect
                        placeholder={{
                          label: 'Selecione...',
                          value: 'Selecione...',
                        }}
                        items={globalState.taxas}
                        onValueChange={(value) => {
                          this.setState({
                            bairro: value,
                          });
                        }}
                        style={pickerSelectStyles}
                        value={this.state.bairro}
                        useNativeAndroidPickerStyle={false}
                        ref={(el) => {
                          this.inputRefs.bairro = el;
                        }}
                        placeholderTextColor={commonStyles.colors.primary}
                      />
                  </View>
                </View>
              :
                null
            }

            </ScrollView>
              <View style={styles.navBarBottom}>
                  <TouchableOpacity style={styles.tabButtonUnique} onPress={() => this.finishOrder()}>
                    <Text style={styles.tabButtonText} textAlign={'center'}>CONFIRMAR</Text>
                  </TouchableOpacity>
              </View>
          </View>
        ) 
      }
    }

    updateTaxas = (taxas) => {
      console.log('RUNNING => @updateTaxas()')

      globalState.taxas = taxas.map( element => {
        newElement = new Object()
        newElement.label = element.nome +' '+ element.valor_venda
        newElement.value = element.nome
        return newElement
      })

      this.setState({isLoading: false})
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

    finishOrder = () => {
      console.log('RUNNING => @finishOrder()', this.state)
      
      globalState.usuario.pedido.entrega.nome = this.state.name
      globalState.usuario.pedido.entrega.celular = this.state.celular
      globalState.usuario.pedido.entrega.bairro = this.state.bairro

      globalState.usuario.pedido.pagamento_em = this.state.method
      globalState.usuario.pedido.entrega.endereco = this.state.delivery

      globalState.usuario.pedido.items = globalState.usuario.carrinho.items.map( element => {
        newElement = new Object()
        newElement = {
          id_produto: element.id,
          nome: element.nome,
          valor: element.valor,
          quantidade: element.quantidade.toString(),
          observacao: element.observacao,
        }
        return newElement
      })
      globalState.usuario.pedido.valor_total = globalState.usuario.carrinho.valor_total

      const { navigate } = this.props.navigation

      if (globalState.usuario.pedido.entrega.endereco == 'ENTREGA') {
        globalState.usuario.pedido.valor_total += parseInt(globalState.usuario.pedido.entrega.taxa)
        navigate('Endereco')
        console.log('PEDIDO ==> ', globalState.usuario.pedido)
      }else{
        if (globalState.usuario.pedido.entrega.nome.isBlank() || globalState.usuario.pedido.entrega.celular.isBlank())
          Alert.alert('Favor informar nome e telefone de quem irá receber o pedido!')
        else
          makeOrder( this.printOrderResult )
      }
    }
};

async function getTaxas( callback ) {
  console.log('RUNNING => @getTaxas()')

  await fetch('http://thechefs.sis.net.br/webservices/taxas.php').then((response) => {        
   return response.json()
  }).then((responseJson) => {
      callback(responseJson)
    })
    .catch((error) => {
      console.error(error)
  });
};

async function makeOrder( callback ) {
  console.log('RUNNING => @makeOrder()')
  console.log('PEDIDO ==> ', globalState.usuario.pedido)
  
  await fetch('http://thechefs.sis.net.br/webservices/pedidos.php?json='+JSON.stringify({
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: commonStyles.colors.primary,
    borderRadius: 4,
    color: commonStyles.colors.secondary,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: commonStyles.colors.primary,
    borderRadius: 8,
    color: commonStyles.colors.secondary,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});