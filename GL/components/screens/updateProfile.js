import React, {Component} from 'react';
import {  ScrollView,  View, StatusBar, TouchableOpacity,Text, Alert, TextInput} from 'react-native';
import styles from 'GL/components/styles';


export default class updateProfile extends Component{
  static navigationOptions = {
    title: 'New User',
    headerStyle: { backgroundColor: '#333333' },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white' //arrow color

  }
  updateProfile=(message)=>{
    Alert.alert(message)
    this.props.navigation.navigate('homeA')
       
  }

  render() {

    return ( 
      <ScrollView style={styles.svcontainer}>

      <Text style={styles.welcome}>Enter User's Details</Text>
      
      <View style={styles.container}>
        <StatusBar 
        backgroundColor="#333333"
        barStyle="light-content"   
        />
         
         

        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
            placeholder={'Display Name'}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
            placeholder={'Phone Number'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
          </View>
        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
          </View>
          <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
            placeholder={'Confirm Password'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />     

        </View> 

         
         
        <TouchableOpacity style={styles.btn}onPress={()=> this.updateProfile("Profile updated")}>
            <Text style={styles.text}>Update Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRej}onPress={()=> this.props.navigation.navigate('homeE')}>
            <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
                                          

       
        </View>
        </ScrollView>
         
    );
  }
}

