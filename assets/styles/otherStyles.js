import { StyleSheet } from 'react-native';
import commonStyles from './commonStyles';

export default StyleSheet.create({

  navBarBottom: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: commonStyles.colors.black
  },
  tabButtonSucess: {
    width: '50%',
    margin: 0,
    padding: 15,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: commonStyles.colors.success
  },
  tabButtonDanger: {
    width: '50%',
    margin: 0,
    padding: 15,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: commonStyles.colors.danger
  },
  tabButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: commonStyles.colors.white
  },

  button: {
    height: 40,    
    padding: 5,
    marginBottom: 10,
    borderWidth: 0.5,
    borderRadius: 3,  
    alignItems: 'center',
    justifyContent: 'center',
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

   ///////////////// LISTAS /////////////////
  lineContainer: {
    fontSize: 22,
    padding: 10,
    marginBottom: 10,
    textAlign: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: commonStyles.colors.almostTransparent
  },
  componenteItemLeft: {
    width: '70%',
    justifyContent: 'flex-start',
  },
  componenteItemRight: {
    width: '25%',
    justifyContent: 'flex-end',
  },  
  inlineItemTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: commonStyles.colors.primary
  },
  inlineItemPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: commonStyles.colors.secondary
  },  
  inlineItemInfo: {
    fontSize: 18,
    color: commonStyles.colors.primary
  },

  /////////////////////////////////////////////////// COMPONENTS ///////////////////////////////////////////////////
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