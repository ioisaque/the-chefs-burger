import { StyleSheet } from 'react-native';
import commonStyles from './commonStyles';

export default StyleSheet.create({

  button: {
    height: 40,    
    padding: 5,
    marginBottom: 10,
    borderWidth: 0.5,
    borderRadius: 3,  
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Button Colors
  btnPrimary: {
    borderColor: commonStyles.colors.primary, 
    backgroundColor: commonStyles.colors.primary,
  },
  btnSecondary: {
    borderColor: commonStyles.colors.secondary, 
    backgroundColor: commonStyles.colors.secondary,
  },
  btnDanger: {
    borderColor: commonStyles.colors.danger, 
    backgroundColor: commonStyles.colors.danger,
  },
  btnSuccess: {
    borderColor: commonStyles.colors.success, 
    backgroundColor: commonStyles.colors.success,
  },
  //Animation
  lodingAnimation: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',   
  },

  ///////////////// SCREEN DEFAULTS /////////////////

  headerLOGO: {
    margin: 5,
    width: 40,
    height: 30,
  },
  headerLogoVA: {
    width: 70,
    height: 45,
    marginTop: 30,
  },
  logoBG: {
    width: 375,
    height: 210,
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  headerRightText:{
    margin: 5,
    fontSize: 15,
    color: commonStyles.colors.white
  },
  headerButton: {
    margin: 10,
    padding: 5,
    height: 30,
    width: 'auto',
    flexDirection: 'row',
  },
  navBarBottom: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: commonStyles.colors.black
  },
  tabButtonPrimary: {
    width: '33.3333333%',
    margin: 0,
    padding: 5,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: commonStyles.colors.primary
  },
  tabButtonSecondary: {
    width: '33.3333333%',
    margin: 0,
    padding: 5,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: commonStyles.colors.primary
  },
  tabIcon: {    
    marginBottom: 0,
  },
  tabText: {
    marginBottom: 3,
    fontSize: 15,
    fontWeight: 'bold',
    color: commonStyles.colors.white
  },

  //Animation
  pageBodyOnLoading: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }, 
  versionText: {
    marginTop: 'auto',
    marginBottom: 5,
    justifyContent: 'center',
  },

  ///////////////// LOGIN SCREEN /////////////////

  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loginLogo: {
    width: 310,
    height: 190,
    marginVertical: 75,
  },
  loginButton: {
    height: 50,
    padding: 10,
    borderRadius: 50,
    marginBottom: 75,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: commonStyles.colors.primary
  },
  loginButtonText:{
    color: '#FFF',
    fontSize: 18,
    marginHorizontal: 20
  },
  loginButtonIcon: {
    marginLeft: 20
  },

  ///////////////// PERFIL SCREEN /////////////////

  perfilContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: commonStyles.colors.white,
  },
  topHeader: {
    padding: 5,
    paddingHorizontal: 15,
    backgroundColor: commonStyles.colors.primary,
  },
  pageBody: {
    flex: 5,
    padding: 5,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  BigProfilePic: {
    width: 150,
    height: 150,
    //borderRadius: 75,
    alignSelf: 'center',
    margin: 20,
  },
  profileName: {
    textAlign: 'center',
    fontSize: 30,
    color: commonStyles.colors.primary,
    marginBottom: 40,
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
  welcomeSubText: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center'
  },
  inlineFlexRowUserInfo: {
    margin: 10,
    marginTop: 40,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  inlineFlexRowBetween: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  refreshButton: {
    padding: 10,
    alignSelf: "flex-end",    
  },

  lado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ladoSub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  photo: {
    backgroundColor: '#C9CBD3',
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  SubText: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center',
      marginTop: 15,
  },

  det: {
    borderColor: '#B1B5C8',
    borderWidth: 2,
  },
  aulasDetalhes: {
    fontSize: 25,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    backgroundColor: '#F7F9FF',
    padding: 10,
    borderRadius: 1,
  },
  agendado: {
    flex: 1,
  },
  
  ativo: {
    textAlign: 'center',
    marginRight: 5,
    marginBottom: 5,
    fontSize: 25,
  },
  
  tipo: {
    textAlign: 'left',
    marginLeft: 5,
    marginBottom: 5,
    fontSize: 25,
  },
  
  infoD: {
    marginLeft: 5,
    fontSize: 17,
  },

  seta: {
    padding: 5,
    backgroundColor: '#E8EAEF',
    alignItems:'center',
    justifyContent: 'center',
  },

  ///////////////// AULA LIST /////////////////
  aulaHeader: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0c6eb8',
    padding: 15,
    marginTop: 5,
  },
  
  aulaHeaderText: {
    color: commonStyles.colors.white,
    fontSize: 20,
  },
  cancelButton: {
    margin: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: commonStyles.colors.danger,
  },
  detalhesButton: {
    margin: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: commonStyles.colors.primary,
  },
  cancelButtonText: {
    fontSize: 5,
    color: commonStyles.colors.white,
  },
  
  aulaContent: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#93A3BC',
    padding: 10,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },

  legenda: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  verde:{
    width: 20,
    height: 20,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: '#379B3C',
  },
  azul: {
    width: 20,
    height: 20,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: commonStyles.colors.primary,
  },
  legendaHolder: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
   ///////////////// HORARIO /////////////////
  componente: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    backgroundColor: '#F7F9FF',
    padding: 10,
    borderTopEndRadius: 5,
    borderTopLeftRadius: 5,
  },
  componenteInfo: {
    fontSize: 22,
    textAlign: 'left',
  },

  detailBtn: {
    padding: 10,
    borderRadius: 3,
    marginRight: 5,
    backgroundColor: commonStyles.colors.primary
  },
  agendarBtn: {
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 3,
    marginRight: 5,
    backgroundColor: commonStyles.colors.success
  },
  desmarcarBtn: {
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 3,
    marginRight: 5,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: commonStyles.colors.danger
  },
  disabledBtn: {
    padding: 10,
    borderRadius: 3,
    marginRight: 5,
    backgroundColor: commonStyles.colors.lightGrey
  },
  btnTxt: {
    color: '#fff',
    textAlign: 'center',
  },

  ///////////////// Detalhes /////////////////
  detailBox: {
    //borderWidth: 2,
    //borderColor: commonStyles.colors.secondary
  },
  detailInlineText: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  detailLine: {
    height: 2,
    width: '100%',
    backgroundColor: commonStyles.colors.lightGrey
  },
  detailTitle: {
    padding: 10,
    fontSize: 25,
    color: commonStyles.colors.secondary,
    textAlign: 'center'
  },
  detailSubTitle: {
    width: '40%',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',    
    color: commonStyles.colors.primary,
  },
  details: {
    width: '60%',
    padding: 10,
    fontSize: 20,
    textTransform: 'capitalize',
    color: commonStyles.colors.darkGrey
  },

  /////////////////////////////////////////////////// COMPONENTS ///////////////////////////////////////////////////

  ///////////////// diaAula & aulaDia /////////////////

  botaoData: {
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0c6eb8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    padding: 15,
  },
  data: {
      fontSize: 15,
      color: '#fff',
  }, 

  ///////////////// Dialogs /////////////////

  dialogTitle: {
    fontSize: 25,
    marginTop: 20,
    textAlign: 'center'
  },
  dialogText: {
    fontSize: 18,
    marginVertical: 2,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  dialogContent: {
    margin: 10,

  },
  defaultDialog: {
    width: '80%',
    maxHeight: '65%',
  },
  dangerBtn: {
    color: commonStyles.colors.white,
    backgroundColor: commonStyles.colors.danger,
  },
  successBtn: {
    color: commonStyles.colors.white,
    backgroundColor:  commonStyles.colors.success,
  },
  //////////////////////////////////////////////// END OFCOMPONENTS ////////////////////////////////////////////////
});