import React, {Component} from 'react'
import Dialog, { DialogTitle, DialogContent, DialogButton } from 'react-native-popup-dialog'
import { View, StatusBar, Text, Image, FlatList, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'

import moment from 'moment'
import 'moment/locale/pt-br'
import AulaInfo from './components/AulaInfo'

import Icon from 'react-native-vector-icons/FontAwesome'

import {globalState} from '../App'
import Categoria  from "./components/Categoria"
import BottomNav from './components/BottomNav'
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

        dialogTitle: 'undefined',
        dialogMessage: 'undefined',
        dialogCurrentItem: null,
        isConfirmationDialogVisible: false
      }
      updateState = this.updateLoadingState.bind(this)
      _handleLogOut = this._handleLogOut.bind(this)
      toggleConfirmationDialog = this.toggleConfirmationDialog.bind(this)
    }

    updateLoadingState = (value) => {
      this.setState({ isLoading: value });
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
            <FlatList data={globalState.cardapio.categorias}
            extraData={this.state}
            keyExtractor={item => `${item.id_aula}`}
            renderItem={({ item }) => <TouchableOpacity onPress={ () => this.toggleDetailDialog(item) }><Categoria {...item}/></TouchableOpacity>}/>
          </View>

          <Dialog
            dialogTitle={<DialogTitle title={this.state.dialogTitle}/>}
            dialogStyle={styles.defaultDialog} 
            visible={this.state.isConfirmationDialogVisible}
            onTouchOutside={ () => { this.setState({ isConfirmationDialogVisible: false }) } }
            actions={[
              <DialogButton text="SIM" style={styles.successBtn} onPress={ () => {this._handleDialogResponse()}} textStyle={{color: commonStyles.colors.white}}/>,
              <DialogButton text="NÃO" style={styles.dangerBtn} onPress={ () => { this.setState({ isConfirmationDialogVisible: false }) }} textStyle={{color: commonStyles.colors.white}}/>
            ]}
            actionsBordered={false}
          >
            <DialogContent>
              <AulaInfo {...this.state.dialogCurrentItem}/>
              <Text style={styles.dialogTitle}>{this.state.dialogMessage}</Text>
            </DialogContent>
          </Dialog>
        </View>
        ) 
      }  
    }   

    killDialogs = () => {
      this.setState({ isDetailDialogVisible: false, isConfirmationDialogVisible: false });
    }
  
    toggleDetailDialog = (aula) => {
      console.log('EXECUTED => @toggleDetailDialog()')

      if (aula)
        this.setState({
          dialogModalidade:     aula.modalidade,
          dialogData:           moment(aula.data_aula).format('dddd, DD[/]MM'),
          dialogHorario:        moment(aula.data_aula + ' ' + aula.hora_aula).format('HH:mm'),
          dialogProfessor:      aula.professor,
          dialogAquecimento:    aula.aquecimento,
          dialogTecnica:        aula.tecnica,
          dialogWOD:            aula.wod,
          dialogVagas:          aula.vagas,
          dialogDeatalhes:      aula.detalhes
        })
      else
        this.setState({
          dialogModalidade:   null,
          dialogData:         null,
          dialogHorario:      null,
          dialogProfessor:    null,
          dialogAquecimento:  null,
          dialogTecnica:      null,
          dialogWOD:          null,
          dialogVagas:        null,
          dialogDeatalhes:    null
        })

      this.setState({ isDetailDialogVisible: !this.state.isDetailDialogVisible })
    }

    toggleConfirmationDialog = (item) => {
      if (item)
        this.setState({
          dialogTitle: 'DESMARCAR',
          dialogMessage: 'Tem certeza que deseja DESMARCAR esta aula?',
          dialogCurrentItem: item,
        })
      else
        this.setState({
          dialogTitle: 'SAIR',
          dialogMessage: 'Tem certeza que deseja SAIR?',
          dialogCurrentItem: undefined
        })

      this.setState({ isConfirmationDialogVisible: !this.state.isConfirmationDialogVisible })

      console.log('EXECUTED => @toggleConfirmationDialog()')
    }

    _handleDialogResponse = () => {
      console.log('RUNNING => @_handleDialogResponse()')
      if (this.state.dialogTitle == 'SAIR')
        this._handleLogOut(1)

      this.killDialogs()
    }

    _handleLogOut = (action) => {
      console.log('RUNNING => @_handleLogOut()')
      if (action) {
        this.setState({ isConfirmationDialogVisible: false })
        const { navigate } = this.props.navigation
        navigate('Logout')
      }else
        this.setState({
          dialogTitle: 'SAIR',
          dialogMessage: 'Tem certeza que deseja sair?',
          dialogCurrentItem: undefined,
          isConfirmationDialogVisible: true
        })
    }

    refreshList = () => {
      console.log('RUNNING => @_handleRefresh()')
      this.setState({ isLoading : true })

      getCategories(this._UpdateCategories)
    }

    _UpdateCategories = (result) => {
      //Atualizando a global 'cardapio.categorias'
      globalState.cardapio.categorias = result
      console.log('UPDATED => #globalState.cardapio.categorias =', globalState.cardapio.categorias)

      this.setState({isLoading: false})
    }
};

// LogIn Webservice: Faz a requisição ao webservice para logar ou atualizar as listas de aulas.
async function getCategories( callback ) {
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