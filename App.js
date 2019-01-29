// Arquivos das telas
import Cardapio from './screens/Cardapio'
import Categorias from './screens/Categorias'
import Historico from './screens/Historico'
import Produto from './screens/Produto'

import { createStackNavigator } from 'react-navigation'
import commonStyles from './assets/styles/commonStyles';

const navigator = createStackNavigator (
  {
    Categorias: Categorias,
    Cardapio: Cardapio,    
    Produto: Produto,
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
    carrinho: false,
    historico: [{
      produtos: [
          {
              id_produto: "83",
              valor: "2",
              quantidade: "1",
              observacao: ""
          },
          {
              id_produto: "85",
              valor: "5",
              quantidade: "1",
              observacao: ""
          }
      ],
      nome: "Icaro",
      telefone: "31973095195",
      endereco: "Av Gerasa",
      numero: "2602",
      complemento: "Casa",
      bairro: "Bethânia",
      cidade: "Ipatinga",
      pagamento: "Dinheiro",
      datahora: "2018-11-27 08:10"
    }]
  },

  cardapio:{
    categorias: [],
    items: [],
    selectedItem: {},
    selectedGroupID: "5"
  },
}

export default navigator;