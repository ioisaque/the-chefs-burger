import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, StatusBar, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'

import {globalState} from '../App'
import styles from '../assets/styles/otherStyles'
import commonStyles from '../assets/styles/commonStyles'
import ItemCardapio from './components/ItemCardapio'

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
        isLoading: true,
      }
    }

    render () {     
      //console.log('#=> Navigated to Cardapio.')
      const { navigate } = this.props.navigation;

      if (this.state.isLoading == true) {
        getCardapio(this._UpdateCardapio)
        
        return(
          <View style={styles.perfilContainer}>
            <StatusBar barStyle="dark-content" />            
            <Image style={styles.logoBG} source={require('../assets/logo-bg.png')}/>

            <View style={styles.topHeader}>
              <View style={styles.inlineFlexRowBetween}>
                <TouchableOpacity style={styles.refreshButton} onPress={() => navigate('Categorias')}>
                  <Icon name="arrow-left" color={commonStyles.colors.white} size={20}/>
                </TouchableOpacity>
                <Text style={styles.welcomeSubText}>{globalState.cardapio.selectedGroup.grupo}</Text>
              </View>
            </View>

            <View style={styles.pageBodyOnLoading}>
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
                <Text style={styles.welcomeSubText}>{globalState.cardapio.selectedGroup.grupo}</Text>
              </View>
            </View>

          <View style={styles.pageBody}>
            <FlatList data={globalState.cardapio.items.filter(item => item.id_grupo == globalState.cardapio.selectedGroup.id)}
              extraData={this.state}
              keyExtractor={item => `${item.id}`}
              renderItem={({ item }) => <TouchableOpacity onPress={ () => this.selectProduct(item) }><ItemCardapio {...item}/></TouchableOpacity>}/>
          </View>
        </View>
        ) 
      }  
    }

    selectProduct = (item) => {
      console.log('RUNNING => @selectProduct => ', item.nome)

      globalState.cardapio.selectedItem = item
      globalState.cardapio.selectedItem.quantidade = 1

      const { navigate } = this.props.navigation;
      navigate('Produto')
    }

    refreshList = () => {
      console.log('RUNNING => @refreshList()')
      this.setState({ isLoading : true })

      getCardapio(this._UpdateCardapio)
    }

    _UpdateCardapio = (result) => {
      globalState.cardapio.items = result.filter(item => item.id_grupo === globalState.cardapio.selectedGroup.id)
      console.log('UPDATED => #globalState.cardapio.items')

      if (!globalState.cardapio.items.length)
      {
        const { navigate } = this.props.navigation;
        Alert.alert('Desculpe, no momento não há itens nessa categoria.')
        navigate('Categorias')
      }
      this.setState({isLoading: false})
    }
};

// LogIn Webservice: Faz a requisição ao webservice para logar ou atualizar as listas de aulas.
async function getCardapio( callback ) {
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