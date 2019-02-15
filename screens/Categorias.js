import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import ItemCategoria  from "./components/ItemCategoria"
import { Alert, View, StatusBar, Text, Image, FlatList,  TouchableOpacity, ActivityIndicator } from 'react-native'

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
        isLoading: true,
      }
      updateState = this.updateLoadingState.bind(this)
    }

    updateLoadingState = (value) => {
      this.setState({ isLoading: value });
    }  

    render () {     
      //console.log('#=> Navigated to HOME.')
      const { navigate } = this.props.navigation;

      if (this.state.isLoading == true) {
        getCategories(this._UpdateCategories)
        
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
                <TouchableOpacity style={styles.refreshButton} onPress={() => globalState.usuario.historico.pedidos.length ? navigate('Historico') : Alert.alert('Histórico vazio.')}>
                  <Icon name="history" color={commonStyles.colors.white} size={20}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.refreshButton} onPress={() =>  globalState.usuario.carrinho.items.length ? navigate('Carrinho') : Alert.alert('Carrinho vazio.')}>
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
                <TouchableOpacity style={styles.refreshButton} onPress={() => globalState.usuario.historico.pedidos.length ? navigate('Historico') : Alert.alert('Histórico vazio.')}>
                  <Icon name="history" color={commonStyles.colors.white} size={20}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.refreshButton} onPress={() =>  globalState.usuario.carrinho.items.length ? navigate('Carrinho') : Alert.alert('Carrinho vazio.')}>
                  <Icon name="shopping-basket" color={commonStyles.colors.white} size={20}/>
                </TouchableOpacity>
              </View>
            </View>

          <View style={styles.pageBody}>
            <FlatList data={globalState.cardapio.categorias.filter(item => item.grupo != 'TAXAS')}
              extraData={this.state}
              keyExtractor={item => `${item.id}`}
              renderItem={({ item }) => <TouchableOpacity onPress={ () => this.selectCategoria(item) }><ItemCategoria {...item}/></TouchableOpacity>}
            />
          </View>
        </View>
        ) 
      }  
    }

    selectCategoria = (item) => {
      console.log('RUNNING => @selectCategoria => ', item.grupo)

      globalState.cardapio.selectedGroup = item

      const { navigate } = this.props.navigation;
      navigate('Cardapio')
    }

    refreshList = () => {
      console.log('RUNNING => @refreshList()')
      this.setState({ isLoading : true })

      getCategories(this._UpdateCategories)
    }

    _UpdateCategories = (result) => {
      globalState.cardapio.categorias = result

      console.log('UPDATED => #globalState.cardapio.categorias')
      this.setState({isLoading: false})
    }
};

// LogIn Webservice: Faz a requisição ao webservice para logar ou atualizar as listas de aulas.
async function getCategories( callback ) {
  console.log('RUNNING => @getCategories()')

  await fetch('http://thechefs.sis.net.br/webservices/grupos.php').then((response) => {        
   return response.json()
  }).then((responseJson) => {
      callback(responseJson)
    })
    .catch((error) => {
      console.error(error)
  });
};