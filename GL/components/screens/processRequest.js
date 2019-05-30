import React from 'react';
import styles from 'GL/components/styles';
import {Image,
  Alert,
  Text,
  View, TouchableOpacity
} from 'react-native';
import pic from 'GL/components/images/picture.png';



export default class App extends React.Component {
  static navigationOptions = {
    title: 'Process Request',
    headerStyle: { backgroundColor: '#333333'},
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white' //arrow color
    
  }

  processRequest=(message)=>{
    Alert.alert(message+"\nMahira Khan, Date: 05/07/19")
    this.props.navigation.navigate('homeA')
       
  }
  render() {
    return (
      <View style={styles.container}>
     
     <View style={styles.picContainer}> 
       <Image source={pic}  style={styles.pic} />
       </View>
     <View style={styles.profile}>
               <Text style={styles.name}>Mahira Khan</Text>
        <Text style={styles.details}>+923002228573</Text>
        <Text style={styles.details}>CNIC: 42201-4072717-8</Text>
        <Text style={styles.details}>Date of Visit: 05/07/2019</Text>
        <Text style={styles.details}>mahira@gmail.com</Text>
        <Text style={styles.details}>Car plate no.: AGK-572</Text>

        </View>
              <TouchableOpacity style={styles.btn}onPress={()=> this.processRequest("Request Approved")}>
            <Text style={styles.text}>Approve Request</Text>
            
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRej}onPress={()=> this.processRequest("Reqest Rejected")}>
            <Text style={styles.text}>Reject Request</Text>
            
        </TouchableOpacity>
            
      </View>
    );
  }
}