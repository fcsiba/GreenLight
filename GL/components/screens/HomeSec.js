import React, { Component } from 'react';
 
import { Image, StatusBar, View, Text, TouchableOpacity } from 'react-native';
import styles from 'GL/components/styles';
import pic from 'GL/components/images/picture.png';

export default class HomeSec extends Component {
  constructor() { 
    super(); 
    this.state = { 
      QR_Code_Value: '', 
      Start_Scanner: false, 
    };
  }
  
  static navigationOptions = ({navigation}) => {
    return{
      title: 'Security Home',
      headerStyle: { backgroundColor: '#333333'},
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white', //arrow color     
   }
  }

  
  render() {
    
      return (
        <View style={styles.container}>
          <StatusBar 
        backgroundColor="#333333"
        barStyle="light-content"   
        />
       <View style={styles.picContainer}> 
       <Image source={pic}  style={styles.pic} />
       </View>

        <View style={styles.profile}>
        <Text style={styles.name}>Security Guard</Text>
        <Text style={styles.details}>+923330615128</Text>
        <Text style={styles.details}>istrong.n.brave@gmail.com</Text>
        <Text style={styles.details}>ERP#11234</Text>
        </View>

       
        <TouchableOpacity style={styles.btn}onPress={()=> this.props.navigation.navigate('qrscan')}>
            <Text style={styles.text}>Security Clearance</Text>
            
        </TouchableOpacity>
          
             
        </View>
      );
    
  }
}


