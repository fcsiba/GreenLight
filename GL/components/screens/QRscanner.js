
import React, { Component } from 'react';
import { Text, View, Linking, TouchableOpacity, Dimensions, PermissionsAndroid, Platform, StyleSheet} from 'react-native';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
import styles from 'GL/components/styles';
const {width: WIDTH}=Dimensions.get('window');

export default class QRscanner extends Component {
  constructor() {
    super();
    this.state = {
      //variable to hold the qr value
      qrvalue: '',
      openScanner: false,
    };
  }
  static navigationOptions = ({navigation}) => {
    return{
      title: 'Scan QR',
      headerStyle: { backgroundColor: '#333333'},
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white', //arrow color
     
   }
  }

  onOpenlink() {
    //Function to open URL, If scanned 
    Linking.openURL(this.state.qrvalue);
    //Linking used to open the URL in any browser that you have installed
  }
  onBarcodeScan(qrvalue) {
    //called after te successful scanning of QRCode/Barcode
    
    this.setState({ qrvalue: qrvalue });
    this.setState({ openScanner: false });
  }
  onOpenScanner() {
    var that =this;
    //To Start Scanning
    if(Platform.OS === 'android'){
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,{
              'title': 'CameraExample App Camera Permission',
              'message': 'CameraExample App needs access to your camera '
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //If CAMERA Permission is granted
            that.setState({ qrvalue: '' });
            that.setState({ openScanner: true });
          } else {
            alert("CAMERA permission denied");
          }
        } catch (err) {
          alert("Camera permission err",err);
          console.warn(err);
        }
      }
      //Calling the camera permission function
      requestCameraPermission();
    }else{
      that.setState({ qrvalue: '' });
      that.setState({ openScanner: true });
    }    
  }
  render() {
    let displayModal;
    //If qrvalue is set then return this view
    if (!this.state.openScanner) {
      return (
        <View style={styles.container}>
            <Text style={styles.heading}>Camera on stand-by</Text>
            <Text style={styles.details}>{this.state.qrvalue ? 'Scanned QR Code: '+this.state.qrvalue : ''}</Text>
            {this.state.qrvalue.includes("http") ? 
              <TouchableOpacity
                onPress={() => this.onOpenlink()}
                style={styles.btn}>
                  <Text style={styles.text}>Open Link</Text>
              </TouchableOpacity>
              : null
            }
            <TouchableOpacity
              onPress={() => this.onOpenScanner()}
              style={styles.btn}>
                <Text style={styles.text}>
                Open QR Scanner
                </Text>
            </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <CameraKitCameraScreen
          showFrame={false}
          //Show/hide scan frame
          scanBarcode={true}
          //Can restrict for the QR Code only
          laserColor={'green'}
          //Color can be of your choice
          frameColor={'yellow'}
          //If frame is visible then frame color
          colorForScannerFrame={'black'}
          //Scanner Frame color
          onReadCode={event =>
            this.onBarcodeScan(event.nativeEvent.codeStringValue) 
          }
        />
      </View>
    );
  }
}
