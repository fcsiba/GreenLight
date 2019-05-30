import React, {Component} from 'react';
import {  ScrollView,  View, StatusBar, TouchableOpacity,Text, TextInput} from 'react-native';
import styles from 'GL/components/styles';


export default class deleteUser extends Component{
  static navigationOptions = {
    title: 'Delete User',
    headerStyle: { backgroundColor: '#333333' },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white' //arrow color

  }

  render() {

    return ( 
      <ScrollView style={styles.svcontainer}>
      
      <View style={styles.container}>
        <StatusBar 
        backgroundColor="#333333"
        barStyle="light-content"   
        />
         
         <Text style={styles.welcome}>Delete User</Text>

        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
        </View>
           
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.text}>Delete User</Text>
        </TouchableOpacity>                         
       
        </View>
        </ScrollView>
         
    );
  }
}

