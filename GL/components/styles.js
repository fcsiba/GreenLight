import {Dimensions, StyleSheet} from 'react-native';
const {width: WIDTH}=Dimensions.get('window')
export default StyleSheet.create({


    lgcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#606060', //gray
      },
      logoContainer:{
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20
      },
     
      logogl:{
        width: 288,
        height:120
      },
      inputContainer:{
        marginTop:7
      },
      input:{
        width: WIDTH -55,
        height: 45,
        borderRadius: 25,
        fontSize:16,
        paddingLeft: 45,
        paddingRight: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal:25
    
      },
      btn: {
        width: WIDTH -55,
        height: 45,
        borderRadius: 25,
        backgroundColor: "#8bc34a", //green
        justifyContent: 'center',
        fontSize:16,
        marginTop: 12
      },
      btnRej: {
        width: WIDTH -55,
        height: 45,
        borderRadius: 25,
        backgroundColor: 'red', //green
        justifyContent: 'center',
        fontSize:16,
        marginTop: 12
      },
      link: {
        
        color: '#ffffff',
        fontSize: 13,
        textAlign: 'right',
        marginTop:10
      },
      text:{
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: 'center'
      },

      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e6e6' //light gray
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        margin: 12,
        textAlign: 'center',
        color: '#333333', //blackish
        marginBottom: 5,
      },
     
    picContainer:{
    alignItems: 'center',
    marginBottom: 10
    },
 
    pic:{
    width: 125,
    height:125
    },
    
    profile:{
    marginTop:10
    },

    name: { //big font
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    },
   
    statusApp: { 
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      marginTop:20,
      color: 'green'
      },
      statusRej: { 
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginTop:20,
        color: 'red'
        },
    details: { //smol font
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    },
    
    logoutlink: {
    color: '#8bc34a', //green
    fontSize: 13,
    textAlign: 'right',
    marginTop:10, 
    marginBottom:30
  },

  svcontainer: { //scroll view
    backgroundColor: '#e6e6e6' //light gray
  },

  QR_text: {
    color: '#000',
    fontSize: 19,
    padding: 8,
    marginTop: 12
  },

  inputIcon:{
    position: 'absolute',
    top: 8,
    left: 37
  },
  inputIconLock:{
    position: 'absolute',
    top: 8,
    left: 38.5
  },
  btnEye: {
    position: 'absolute',
    top: 11,
    right: 37
     },
     listItem:{
       fontSize: 48,
       fontWeight: 'bold',
       color:'#333',
       borderBottomWidth:2,
       borderBottomColor: '#999'
     },
     SectionHeader:{
      backgroundColor : '#8bc34a',
      fontSize : 20,
      padding: 5,
      color: '#fff',
      fontWeight: 'bold'
   },
    SectionListItemS:{
      fontSize : 16,
      padding: 6,
      color: '#000',
      backgroundColor : '#F5F5F5'
  },
  heading: { 
    color: 'black', 
    fontSize: 24, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 30 
  }
})