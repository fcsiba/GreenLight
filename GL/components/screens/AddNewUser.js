import React, {Component} from 'react';
import {  ScrollView,  View, StatusBar, TouchableOpacity,Text, TextInput} from 'react-native';
import styles from 'GL/components/styles';


export default class AddNewUser extends Component{
  static navigationOptions = {
    title: 'New User',
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
         
         <Text style={styles.welcome}>Enter User's Details</Text>

        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
            placeholder={'Full Name'}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
            placeholder={'CNIC Number'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
          </View>
        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
            placeholder={'Email Address'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
          </View>
          <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
            placeholder={'Mobile Number'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />     

        </View>

        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
            placeholder={'Registration Number'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />     

        </View>

        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
            placeholder={'User Type'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />     

        </View>

        
        
       
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.text}>Add User</Text>
        </TouchableOpacity>
                         
       
        </View>
        </ScrollView>
         
    );
  }
}

