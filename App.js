// Arquivos das telas
import Login from './screens/Login'
import Logout from './screens/Logout'
import Cardapio from './screens/Cardapio'
import Categorias from './screens/Categorias'
import Historico from './screens/Historico'

import { createStackNavigator } from 'react-navigation'
import commonStyles from './assets/styles/commonStyles';

const navigator = createStackNavigator (
  {
    Login: Login,
    Logout: Logout,
    Cardapio: Cardapio,
    Categorias: Categorias,
    Historico: Historico,
  },
  {
    initialRouteName: 'Cardapio',
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
  
  navBar: {
    firstLink: {
      screen: 'Logout',
      state: 0,
      icon: 'power',
      title: 'Sair'
    },
    secondLink: {
      screen: 'Cardapio',
      state: 1,
      icon: 'alarm',
      title: 'Histórico'
    },
    thirdLink: {
      screen: 'Dias',
      state: 0,
      icon: 'basket',
      title: 'Carrinho'
    },
    navigation: null
  },
    
  usuario: {
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
    selectedGroupID: "5"
  },
}

export default navigator;