import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ScrollView, View, StatusBar, Text, Image, TouchableOpacity, Alert } from 'react-native'

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
        method: 'DINHEIRO',
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

          <View style={styles.pageBody}>

            <View style={styles.lineContainer} justifyContent={'space-between'}>
                <View style={styles.componenteItemLeft} width={'50%'}>
                    <Text style={styles.inlineItemTitle}>Pagamento em: </Text>
                </View>
                <ScrollView style={styles.improvisedSelect} width={'50%'}>
                  <Text style={styles.inlineItemTitle}>Dinheiro</Text>
                  <Text style={styles.inlineItemTitle}>Cartão de Débito</Text>
                  <Text style={styles.inlineItemTitle}>Cartão de Crédito</Text>
                </ScrollView>
            </View>

            <View style={styles.lineContainer} justifyContent={'space-between'}>
                <View style={styles.componenteItemLeft} width={'50%'}>
                  <Text style={styles.inlineItemTitle}>Retirada: </Text>
                </View>
                <ScrollView style={styles.improvisedSelect} width={'50%'}>
                  <Text style={styles.inlineItemTitle}>Balcão</Text>
                  <Text style={styles.inlineItemTitle}>Entrega</Text>
                </ScrollView>
            </View>

          </View>
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