import React, {Component} from 'react';
import { Image, View, StatusBar, TouchableOpacity,Text} from 'react-native';
import styles from 'GL/components/styles';
import pic from 'GL/components/images/picture.png';
//import icon from 'react-native-vector-icons/Ionicons'  //install react-native-vector-icons package


export default class HomeAdmin extends Component{

  static navigationOptions = {
    title: 'Admin Home',
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

        <View style={styles.profile}>
        <Text style={styles.name}>Bossman Bing</Text>
        <Text style={styles.details}>+923330615128</Text>
        <Text style={styles.details}>king.of.the.world@gmail.com</Text>
        <Text style={styles.details}>ERP#11234</Text>
        </View>

       
        <TouchableOpacity style={styles.btn}onPress={()=> this.props.navigation.navigate('penreq')}>
            <Text style={styles.text}>Pending Requests</Text>           
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}onPress={()=> this.props.navigation.navigate('newuser')}>
            <Text style={styles.text}>Add New User</Text>            
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={()=> this.props.navigation.navigate('reqhis')}>
            <Text style={styles.text}>Request History</Text>            
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={()=> this.props.navigation.navigate('deluser')}>
            <Text style={styles.text}>Delete User</Text>            
        </TouchableOpacity>
        
        </View>

    
    );
  }
}
