import React, {Component} from 'react'
import RNPickerSelect from 'react-native-picker-select'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, ScrollView, StatusBar, Text, TextInput, Image, TouchableOpacity  } from 'react-native'

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

      this.inputRefs = {
        method: null,
        delivery: null,
        neighborhood: null,
    };

      this.state = {
        method: 'Dinheiro',
        delivery: 'Selecione...',
        neighborhood: 'Selecione...',
        name: '',
        phone: '',
      }
    }

    render () {     
      //console.log('#=> Navigated to Cardapio.')
      const { navigate } = this.props.navigation;

        return( 
        <View style={styles.perfilContainer}>
            <StatusBar barStyle="dark-content"/>
            <Image style={styles.logoBG} source={require('../assets/logo-bg.png')}/>

            <View style={styles.topHeader}>            

              <View style={styles.inlineFlexRowBetween}>
                <Text style={styles.welcomeSubText}>Finalizar Pedido</Text>

                <TouchableOpacity style={styles.refreshButton} onPress={() => navigate('Categorias')}>
                  <Icon name="arrow-left" color={commonStyles.colors.white} size={20}/>
                </TouchableOpacity>
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
                        label: 'Selecione...',
                        value: 'Selecione...',
                      }}
                      items={[{
                          label: 'Balcão',
                          value: 'Balcão',
                        },{
                          label: 'Entrega',
                          value: 'Entrega',
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
            (this.state.delivery == 'Balcão') ?
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
                    <TextInput style={styles.inputText} onChangeText={text => this.setState({phone: text})} placeholder={'(XX) X XXXX XXXX'} keyboardType={'numeric'}/>
                  </View>
                </View>
                </View>
            :
              null
          }

{ 
            (this.state.delivery == 'Entrega') ?
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
                      items={[{
                          label: 'BAIRRO DAS AGUAS - R$ 4,00',
                          value: 'BAIRRO DAS AGUAS',
                        },{
                          label: 'AREAL - R$ 2,00',
                          value: 'AREAL',
                        }]
                      }
                      onValueChange={(value) => {
                          this.setState({
                            neighborhood: value,
                          });
                      }}
                      style={pickerSelectStyles}
                      value={this.state.neighborhood}
                      useNativeAndroidPickerStyle={false}
                      ref={(el) => {
                          this.inputRefs.neighborhood = el;
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

    finishOrder = () => {
      console.log('RUNNING => @finishOrder()')
      
      globalState.usuario.pedido.entrega.nome = this.state.name
      globalState.usuario.pedido.entrega.celular = this.state.phone
      globalState.usuario.pedido.entrega.bairro = this.state.neighborhood

      globalState.usuario.pedido.pagamento_em = this.state.method
      globalState.usuario.pedido.entrega.tipo = this.state.delivery
      globalState.usuario.pedido.items = globalState.usuario.carrinho.items
      globalState.usuario.pedido.valor_total = globalState.usuario.carrinho.valor_total

      console.log('PEDIDO ==> ', globalState.usuario.pedido)
      const { navigate } = this.props.navigation;
      navigate('Endereco')
    }
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