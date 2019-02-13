// Arquivos das telas
import Cardapio from './screens/Cardapio'
import Categorias from './screens/Categorias'
import Historico from './screens/Historico'
import Produto from './screens/Produto'
import Carrinho from './screens/Carrinho'
import Finalizar from './screens/Finalizar'
import Endereco from './screens/Endereco'

import { createStackNavigator } from 'react-navigation'
import commonStyles from './assets/styles/commonStyles';

const navigator = createStackNavigator (
  {
    Categorias: Categorias,
    Cardapio: Cardapio,    
    Produto: Produto,
    Carrinho: Carrinho,
    Finalizar: Finalizar,
    Endereco: Endereco,
    Historico: Historico,
  },
  {
    initialRouteName: 'Categorias',
    /* The header config from HomeScreen is now here */
    navigationOptions: {      
      headerBackTitle: '',
      headerTruncatedBackTitle: '',
      headerStyle: {
        elevation: 0,
        borderBottomWidth: 0,
        backgroundColor: commonStyles.colors.primary,
      },
      headerTintColor: commonStyles.colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'left',
      },
    },
  }
)

export const globalState = {

  usuario: {
    carrinho: {
      items: [],
      valor_total: 0
    },
    pedido: {
      items: [],
      entrega: {
        tipo: '',
        nome: '',
        celular: '',
        
          endereco: '',
          numero: '',
          bairro: '',
          complemento: ''
      },
      pagamento_em: '',
      valor_total: 0
    },
    historico: []
  },

  cardapio:{
    categorias: [],
    items: [],
    selectedItem: {
      imagem: '../assets/logo-bg.png'
    },
    selectedGroupID: "5"
  },
}

export default navigator;