import React, {Component} from 'react'
import RNPickerSelect from 'react-native-picker-select'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, ScrollView, StatusBar, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native'

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
        name: '',
        phone: '',
        endereco: '',
        numero: '',
        complemento: '',
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
                <Text style={styles.welcomeSubText}>Entrega</Text>

                <TouchableOpacity style={styles.refreshButton} onPress={() => navigate('Categorias')}>
                  <Icon name="arrow-left" color={commonStyles.colors.white} size={20}/>
                </TouchableOpacity>
              </View>
            </View>

          <ScrollView style={styles.pageBody}>

            <View style={styles.lineContainer} justifyContent={'space-between'}>
              <View style={styles.componenteItemLeft} width={'30%'}>
                <Text style={styles.inlineItemTitle}>Nome: </Text>
              </View>
              <View style={styles.componenteItemRight} width={'70%'}>
                <TextInput style={styles.inputText} onChangeText={text => this.setState({name: text})} placeholder={'Quem irá receber.'} keyboardType={'name-phone-pad'}/>
              </View>
            </View>

            <View style={styles.lineContainer} justifyContent={'space-between'}>
              <View style={styles.componenteItemLeft} width={'30%'}>
                <Text style={styles.inlineItemTitle}>Celular: </Text>
              </View>
              <View style={styles.componenteItemRight} width={'70%'}>
                <TextInput style={styles.inputText} onChangeText={text => this.setState({phone: text})} placeholder={'(XX) X XXXX XXXX'} keyboardType={'numeric'}/>
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
        ) 
    }

    confirmOrder = () => {
      console.log('RUNNING => @confirmOrder()')
      
      globalState.usuario.pedido.entrega.nome = this.state.name
      globalState.usuario.pedido.entrega.celular = this.state.phone
      globalState.usuario.pedido.entrega.endereco = this.state.endereco
      globalState.usuario.pedido.entrega.numero = this.state.numero
      globalState.usuario.pedido.entrega.complemento = this.state.complemento

      console.log('PEDIDO ==> ', globalState.usuario.pedido)
      const { navigate } = this.props.navigation;
      //navigate('Categorias')
    }
};

async function makeAnOrder( callback ) {
  console.log('RUNNING => @getCardapio()')

  await fetch('http://thechefs.sis.net.br/webservices/cardapio.php').then((response) => {        
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