import React, {Component} from 'react'
import { View, Text, Image} from 'react-native';
import {LocaleConfig, Calendar} from 'react-native-calendars';

import moment from 'moment'
import 'moment/locale/pt-br'

import {globalState} from '../App'
import BottomNav from './components/BottomNav'
import styles from '../assets/styles/otherStyles';
import commonStyles from '../assets/styles/commonStyles';

LocaleConfig.locales['br'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Març.','Abrl.','Maio.','Junh.','Julh.','Ago.','Set.','Out.','Nov.','Dez.'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  dayNamesShort: ['Do','Seg','Ter','Qua','Qui','Sex','Sab']
};
LocaleConfig.defaultLocale = 'br';

export default class Agendar extends Component{
  static navigationOptions = {
    headerLeft: (
      <Image
        source={require('../assets/icon.png')}
        style={styles.headerLOGO}
      />
    ),
    headerTitle: (null),
    headerRight: (
      <Text style={styles.headerRightText}>Hoje é {moment(new Date()).format('DD [de] MMMM')}.</Text>
    )
  }

    state = {
      date: new Date()
    }
    constructor(props){
      super(props)
    }

    render () {
      //console.log('#=> Navigated to Calendário.')
      globalState.navBar.navigation = this.props.navigation
      globalState.navBar.firstLink = {
        screen: 'Welcome',
        icon: 'arrow-round-back',
        title: 'Voltar' 
      }
      globalState.navBar.secondLink.state = 0
      globalState.navBar.thirdLink.state = 1

      let aulasBlue = this._getDistinctList(globalState.aulasAgendadas.map(element => element.data_aula))
        //console.log('Dias em que temos aulas AGENDADAS => ', aulasBlue)

      let aulasGreen = this._getDistinctList(globalState.aulasDisponiveis.filter(e => e.vagas > 0).map(element => element.data_aula))
        //console.log('Dias em que temos aulas DISPONIVEIS => ', aulasGreen)

      let coloredDates = new Object()
      const hoje = new Date().getFullYear() +'-'+ (parseInt(new Date().getMonth())+1) +'-'+ new Date().getDate() 


        globalState.datasDisponiveis.map(aula => aula.data_aula).forEach(data => {
          if(aulasGreen.includes(data)) {

            if(aulasBlue.includes(data))
              coloredDates[data] = commonStyles.calendarDayBlue
            else
              coloredDates[data] = commonStyles.calendarDayGreen

            if(aulasBlue.includes(hoje))
              coloredDates[hoje] = commonStyles.calendarDayBlue
            else
              coloredDates[hoje] = commonStyles.calendarDayGreen
          }else{
            if(aulasBlue.includes(data) | aulasBlue.includes(hoje))
              coloredDates[data] = commonStyles.calendarDayBlue
          }
        })


        let aulasYellow = []
        //console.log('aulasYellow => ', aulasYellow)

        globalState.datasDisponiveis.map(aula => aula.data_aula).forEach(data => {
          aulasYellow.push(data)
        })

      return (
        <View style={styles.perfilContainer}>          

          <View style={styles.pageBody}>

            <Calendar
              minDate={this.state.date}
              hideExtraDays={true}
              onDayPress={(day) => this._goToHorasDisponiveis(aulasYellow, day.dateString)}
              onDayLongPress={() => {this.setState({ visible: true });}}
              markedDates={coloredDates}
              markingType={'period'}
              theme={commonStyles.calendar}
            />

            <View style={styles.legendaHolder}>
              <View style={styles.legenda}>
                <View style={styles.azul}></View>
                <Text>VOCÊ TEM AULA</Text>
              </View>
              <View style={styles.legenda}>                
                <View style={styles.verde}></View>
                <Text>VAGAS DISPONÍVEIS</Text>         
              </View>
            </View>

          </View>

          <BottomNav {...globalState.navBar}/>
        </View>
        )
      }

    _getDistinctList = (list) => {
      return list.filter((value, index, self) => self.indexOf(value) === index)
    }

    _goToHorasDisponiveis = (aulasYellow, day) => { 
      //console.log('RUNNING => @_goToHorasDisponiveis() => day ', day)
      if (aulasYellow.includes(day))
      {
        const {navigate} = this.props.navigation
        globalState.dataSelecionada = day
        navigate('Horas') 
      }
    };
  };