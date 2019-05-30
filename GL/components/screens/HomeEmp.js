import React, {Component} from 'react';
import { Image, View, StatusBar, TouchableOpacity,Text} from 'react-native';
import styles from 'GL/components/styles';
import pic from 'GL/components/images/picture.png';


export default class HomeEmp extends Component{

  static navigationOptions = {
    title: 'Employee Home',
    headerStyle: { backgroundColor: '#333333'},
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
       <TouchableOpacity onPress={()=> this.props.navigation.navigate('updprof')} >
            <Text style={styles.logoutlink}>
              Update Profile
            </Text>
           
        </TouchableOpacity>

        <View style={styles.profile}>
        <Text style={styles.name}>Usmama Rahbin</Text>
        <Text style={styles.details}>+923330615128</Text>
        <Text style={styles.details}>greenlight@gmail.com</Text>
        <Text style={styles.details}>ERP#11234</Text>
        </View>

       
        <TouchableOpacity style={styles.btn}onPress={()=> this.props.navigation.navigate('submitreq')}>
            <Text style={styles.text}>Invite a Vistor</Text>
            
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('login')} >
            <Text style={styles.logoutlink}  >
              Logout
            </Text>
           
        </TouchableOpacity>
        </View>

    
    );
  }
}
