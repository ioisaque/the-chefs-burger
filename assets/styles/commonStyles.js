export default {
  fontfamily: 'Tahoma',
  colors: {
    primary: '#C32827',
    secondary: '#0c6eb8',
    black: '#000',
    white: '#FFF',
    lightGrey: '#9e9e9e',
    darkGrey: '#484848',
    almostTransparent: '#dedede36',
    
    //Bootstrap
    danger: '#e3000f',
    success: '#2f8417',
    warning: '#f1b701',
    neutral: '#646464',
  },
  calendar: {
      backgroundColor: '#ff0000', // NOT WORKING
      calendarBackground: '#fff', // FUNDO DO CALENDARIO
      textSectionTitleColor: '#19308A', // DIAS DAS SEMANAS
      selectedDayBackgroundColor: '#ff0000', // NOT WORKING
      selectedDayTextColor: '#ff0000', // NOT WORKING
      todayTextColor: '#19308A', // COR DO DIA (TEXTO)
      dayTextColor: '#060606', // COR DOS OUTROS DIAS (TEXTO)
      textDisabledColor: '#d9e1e8', // COR DOS DIAS INATIVOS (TEXTO)
      dotColor: '#ff0000',
      selectedDotColor: '#ffffff',
      arrowColor: '#19308A', // COR DAS SETAS
      monthTextColor: '#19308A', // COR DO MES (TEXTO)
      textMonthFontWeight: 'bold',
      textDayFontSize: 15,
      textMonthFontSize: 16,
      textDayHeaderFontSize: 16
  },
  calendarDayYellow: { color: '#f1b701', startingDay: true, endingDay: true, textColor: '#fff' },
  calendarDayGreen: { color: '#2f8417', startingDay: true, endingDay: true, textColor: '#fff' },
  calendarDayBlue: { color: '#19308A', startingDay: true, endingDay: true, textColor: '#fff' },
  calendarDayRed: { color: '#e3000f', startingDay: true, endingDay: true, textColor: '#fff' }
}