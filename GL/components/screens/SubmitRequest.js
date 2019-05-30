import React, {Component} from 'react';
import {  ScrollView,  View, StatusBar, TouchableOpacity,Text,Alert, TextInput} from 'react-native';
import styles from 'GL/components/styles';


export default class SubmitRequest extends Component{
  static navigationOptions = {
    title: 'Invite a Visitor',
    headerStyle: { backgroundColor: '#333333' },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white' //arrow color

  }
  submitRequest=(message)=>{
    Alert.alert(message)
    this.props.navigation.navigate('homeE')
       
  }

  render() {

    return ( 
      <ScrollView style={styles.svcontainer}>
      
      <View style={styles.container}>
        <StatusBar 
        backgroundColor="#333333"
        barStyle="light-content"   
        />
         
         <Text style={styles.welcome}>Enter Visitor's Details</Text>

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
            placeholder={'Date of Visit (DD/MM/YY)'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />     

        </View>

        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
            placeholder={'Car Plate Number'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />     

        </View>

        
        
       
        <TouchableOpacity style={styles.btn}onPress={()=> this.submitRequest("Request Submitted")}>
            <Text style={styles.text}>Submit Request</Text>
        </TouchableOpacity>
                         
       
        </View>
        </ScrollView>
         
    );
  }
}

