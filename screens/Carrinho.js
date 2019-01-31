import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, StatusBar, Text, Image, FlatList, TouchableOpacity } from 'react-native'

import {globalState} from '../App'
import styles from '../assets/styles/otherStyles'
import commonStyles from '../assets/styles/commonStyles'
import ItemCarrinho from './components/ItemCarrinho'

export default class Carrinho extends Component{
    
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

      removeItemOfCarrinho = this.removeItemOfCarrinho.bind(this)
    }

    render () {     
      //console.log('\n|##################################################################|\n')
      //console.log(' ==> Navigated to Carrinho.\n\n', globalState.usuario.carrinho.items)
      //console.log('\n|##################################################################|\n')
      const { navigate } = this.props.navigation;

        return( 
            <View style={styles.perfilContainer}>
                <StatusBar barStyle="dark-content"/>
                <Image style={styles.logoBG} source={require('../assets/logo-bg.png')}/>

                <View style={styles.topHeader}>
                    <View style={styles.inlineFlexRowBetween}>
                        <Text style={styles.welcomeSubText}>Carrinho</Text>

                        <TouchableOpacity style={styles.refreshButton} onPress={() => navigate('Categorias')}>
                            <Icon name="close" color={commonStyles.colors.white} size={20}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.pageBody}>
                    <FlatList data={globalState.usuario.carrinho.items}
                        extraData={this.state}
                        refreshing={this.state.listIsLoading}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <ItemCarrinho {...item}/>}
                    />
                </View>

                <View style={styles.lineContainer} justifyContent={'space-between'} marginBottom={10}>
                    <View style={styles.componenteItemLeft}>
                        <Text style={styles.inlineItemTitle}>Total do pedido:</Text>
                    </View>
                    <View style={styles.componenteItemRight}>
                        <Text style={styles.inlineItemPrice}>{floatToReais(globalState.usuario.carrinho.valor_total)}</Text>
                    </View>
                </View>

                <View style={styles.navBarBottom}>
                    <TouchableOpacity style={styles.tabButtonDanger} onPress={() => navigate('Categorias')}>
                        <Text style={styles.tabButtonText} textAlign={'center'}>COMPRAR MAIS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabButtonSucess} onPress={() => navigate('Finalizar')}>
                        <Text style={styles.tabButtonText} textAlign={'center'}>FINALIZAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ) 
    }

    removeItemOfCarrinho = (item) => {
        this.setState({listIsLoading: true})

        const newList = globalState.usuario.carrinho.items.filter(i => i.id != item.id)
        globalState.usuario.carrinho.items = newList

        globalState.usuario.carrinho.valor_total = globalState.usuario.carrinho.valor_total - item.valor_total
        this.setState({listIsLoading: false})

        if(!newList.length)
        {
            globalState.usuario.carrinho.valor_total = 0
            const { navigate } = this.props.navigation
            navigate('Categorias')
        }
    }
}

function floatToReais(numero) {
    var numero = parseFloat(numero).toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}