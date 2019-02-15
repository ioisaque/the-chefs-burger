import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, StatusBar, Text, Image, FlatList, TouchableOpacity } from 'react-native'

import {globalState} from '../App'
import styles from '../assets/styles/otherStyles'
import commonStyles from '../assets/styles/commonStyles'
import ItemResumo from './components/ItemResumo'

export default class Resumo extends Component{
    
    static navigationOptions = {
      header: null,
      headerLeft: (null),
      headerTitle: (null),
      headerRight: (null)
    }

    constructor(props) {
      super(props)
      
      this.state = {
        listIsLoading: false
      }
    }

    render () {     
      //console.log('\n|##################################################################|\n')
      //console.log(' ==> Navigated to Resumo.\n\n', globalState.usuario.carrinho.items)
      //console.log('\n|##################################################################|\n')
      const { navigate } = this.props.navigation

        return( 
            <View style={styles.perfilContainer}>
                <StatusBar barStyle="dark-content"/>
                <Image style={styles.logoBG} source={require('../assets/logo-bg.png')}/>

                <View style={styles.topHeader}>
                    <View style={styles.inlineFlexRowBetween}>
                        <TouchableOpacity style={styles.refreshButton} onPress={() => navigate('Historico')}>
                            <Icon name="close" color={commonStyles.colors.white} size={20}/>
                        </TouchableOpacity>

                        <Text style={styles.welcomeSubText}>Resumo do Pedido</Text>
                    </View>
                </View>

                <View style={styles.pageBody}>
                    <View style={styles.lineContainer} justifyContent={'space-between'} marginBottom={0}>
                        <View style={styles.componenteItemLeft} width={'50%'}>
                            <Text style={styles.inlineItemTitle}>#{globalState.usuario.historico.selectedOrder.id_pedido}</Text>
                        </View>
                        <View style={styles.componenteItemRight} width={'50%'}>
                            <Text style={styles.inlineItemPrice}>{globalState.usuario.historico.selectedOrder.data_pedido}</Text>
                        </View>
                    </View>
                      
                    <View style={styles.thinRedLine} marginBottom={10}/>

                    <FlatList data={globalState.usuario.historico.selectedOrder.items}
                        extraData={this.state}
                        refreshing={this.state.listIsLoading}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <TouchableOpacity onPress={ () => this.selectProduct(item) }><ItemResumo {...item}/></TouchableOpacity>}
                    />
                </View>
            </View>
        ) 
    }

    selectProduct = (item) => {
        console.log('RUNNING => @selectProduct => ', item.nome)
  
        globalState.cardapio.selectedItem = item
  
        const { navigate } = this.props.navigation;
        navigate('Produto')
      }
}