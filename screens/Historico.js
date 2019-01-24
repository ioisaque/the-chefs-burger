import React, {Component} from 'react'
import { View, StatusBar, Text, Image, FlatList, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'

import moment from 'moment'
import 'moment/locale/pt-br'
import Icon from 'react-native-vector-icons/FontAwesome'

import {globalState} from '../App'
import Historico from "./components/Historico"
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
      isLoading: true
    }
  }

  render () {
    console.log('#=> Navigated to Cardapio.')
    globalState.navBar.navigation = this.props.navigation
    globalState.navBar.firstLink = {
      screen: 'Logout',
      icon: 'power',
      title: 'Sair'
    }

    const { navigate } = this.props.navigation;

    if (this.state.isLoading == true) {
      getClientHistory(this._UpdateHistory)

      return(
          <View style={styles.perfilContainer}>
            <StatusBar barStyle="dark-content" />
            <Image style={styles.logoBG} source={require('../assets/logo-bg.png')}/>

            <View style={styles.topHeader}>
              <View style={styles.inlineFlexRowBetween}>
                <Text style={styles.welcomeSubText}>Cardápio</Text>

                <TouchableOpacity style={styles.refreshButton} onPress={this.refreshList}>
                  <Icon name="refresh" color={commonStyles.colors.white} size={20}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.refreshButton} onPress={() => navigate('Historico')}>
                  <Icon name="history" color={commonStyles.colors.white} size={20}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.refreshButton} onPress={() => navigate('Carrinho')}>
                  <Icon name="shopping-basket" color={commonStyles.colors.white} size={20}/>
                </TouchableOpacity>
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
            <StatusBar barStyle="dark-content" />
            <Image style={styles.logoBG} source={require('../assets/logo-bg.png')}/>

            <View style={styles.topHeader}>

              <View style={styles.inlineFlexRowBetween}>
                <Text style={styles.welcomeSubText}>Cardápio</Text>

                <TouchableOpacity style={styles.refreshButton} onPress={this.refreshList}>
                  <Icon name="refresh" color={commonStyles.colors.white} size={20}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.refreshButton} onPress={() => navigate('Historico')}>
                  <Icon name="history" color={commonStyles.colors.white} size={20}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.refreshButton} onPress={() =>  navigate('Carrinho')}>
                  <Icon name="shopping-basket" color={commonStyles.colors.white} size={20}/>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.pageBody}>
              <FlatList data={globalState.usuario.historico}
                extraData={this.state}
                keyExtractor={item => `${item.id_aula}`}
                renderItem={({ item }) => <TouchableOpacity onPress={ () => this.toggleDetailDialog(item) }><Historico {...item}/></TouchableOpacity>}/>
            </View>
          </View>
      )
    }
  }

  refreshList = () => {
    console.log('RUNNING => @_handleRefresh()')
    this.setState({ isLoading : true })

    getClientHistory(this._UpdateHistory)
  }

  _UpdateHistory = (result) => {
    //Atualizando a global 'cardapio.categorias'
    globalState.cardapio.categorias = result
    console.log('UPDATED => #globalState.cardapio.categorias =', globalState.cardapio.categorias)

    this.setState({isLoading: false})
  }
};

// LogIn Webservice: Faz a requisição ao webservice para logar ou atualizar as listas de aulas.
async function getClientHistory( callback ) {
  console.log('RUNNING => @logInWebservice()')

  await fetch('http://thechefs.sis.net.br/webservices/grupos.php').then((response) => {
    return response.json()
  }).then((responseJson) => {
    callback(responseJson)
  })
      .catch((error) => {
        console.error(error)
      });
};