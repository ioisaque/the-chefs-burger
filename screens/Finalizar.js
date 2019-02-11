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

      this.inputRefs = {
        method: null,
        delivery: null,
        neighborhood: null,
    };

      this.state = {
        method: 'Dinheiro',
        delivery: 'Balcão',
        neighborhood: 'BAIRRO DAS AGUAS',
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
                    />
                </View>
            </View>

            <View style={styles.lineContainer} justifyContent={'space-between'}>
                <View style={styles.componenteItemLeft} width={'50%'}>
                  <Text style={styles.inlineItemTitle}>Retirada: </Text>
                </View>
                <View style={styles.componenteItemRight} width={'50%'}>
                  <RNPickerSelect
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
                    <TextInput style={styles.inputText} onChangeText={text => this.setState({name: text})} placeholder={'Quem irá buscar.'}/>
                  </View>
                </View>

                <View style={styles.lineContainer} justifyContent={'space-between'}>
                  <View style={styles.componenteItemLeft} width={'50%'}>
                    <Text style={styles.inlineItemTitle}>Celular: </Text>
                  </View>
                  <View style={styles.componenteItemRight} width={'50%'}>
                    <TextInput style={styles.inputText} onChangeText={text => this.setState({phone: text})} placeholder={'(XX) X XXXX XXXX'}/>
                  </View>
                </View>
                </View>
            :
              <View style={styles.lineContainer} justifyContent={'space-between'}>
                <View style={styles.componenteItemLeft} width={'50%'}>
                  <Text style={styles.inlineItemTitle}>Bairro: </Text>
                </View>
                <View style={styles.componenteItemRight} width={'50%'}>
                  <RNPickerSelect
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
                    />
                </View>
              </View>
          }

          </ScrollView>
            <View style={styles.navBarBottom}>
                <TouchableOpacity style={styles.tabButtonUnique} onPress={() => Alert.alert('Finalizado!')}>
                    <Text style={styles.tabButtonText} textAlign={'center'}>CONFIRMAR</Text>
                </TouchableOpacity>
            </View>
        </View>
        ) 
    }

    handleResultAndRedirect = (result) => {
      console.log('RECIEVED => ', result)

        const { navigate } = this.props.navigation;
        navigate('Categorias')
    }
};

async function finishOrder( callback ) {
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