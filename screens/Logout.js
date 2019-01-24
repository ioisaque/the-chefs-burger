import React, {Component} from 'react';
import { AsyncStorage, View, ActivityIndicator } from 'react-native';

import styles from '../assets/styles/otherStyles';
import commonStyles from '../assets/styles/commonStyles';

import { globalState } from '../App';

export default class Login extends Component {
  static navigationOptions = {
    header: null,
    title: 'Logout'
  }

  constructor(props){
      super(props)
  }
  
  state = {
    isLoading: true
  };

  render () {
    console.log('#=> Navigated to Logout.')

    _deleteLocalData(this._getDeleteLocalDataResult)

      return(
        <View style={styles.perfilContainer}>
          <View style={styles.pageBodyOnLoading} >
            <ActivityIndicator size="large" color={commonStyles.colors.primary}/>
          </View>
        </View>
      )
  }

  _getDeleteLocalDataResult = (localData) => {      
    const { navigate } = this.props.navigation
    console.log('_getDeleteLocalDataResult() => ', localData)
    navigate('Login', {name: 'Login'})
  }
}

// LOCAL STORAGE
_deleteLocalData = async (callback) => {
  console.log('CHECK POINT => _deleteLocalData()')
  try {
    let storage = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(storage)
    storage = await AsyncStorage.getAllKeys()

    callback(storage)

  } catch (error) {
    console.log('Error storing data: ', error)
  }
}