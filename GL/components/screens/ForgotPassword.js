

import React, {Component} from 'react';
import {Text, View, StatusBar, Image} from 'react-native';
import styles from 'GL/components/styles';
import pic from 'GL/components/images/fp.jpg';
export default class ForgotPassword extends Component{

  static navigationOptions = {
    title: 'Forgot Password',
    headerStyle: { backgroundColor: '#333333' },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white' //arrow color
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
        <Text style={styles.instructions}>To request for a password change, contact administrator at:</Text>
        <Text style={styles.welcome}>admin@example.com</Text>

  </View>
    );
  }
}

