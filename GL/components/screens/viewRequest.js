import React from 'react';
import styles from 'GL/components/styles';
import {Image,
  Text,
  View
} from 'react-native'


import pic from 'GL/components/images/picture.png';

export default class viewRequest extends React.Component {
  static navigationOptions = {
    title: 'View Request',
    headerStyle: { backgroundColor: '#333333'},
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white' //arrow color
    
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
        
        <Text style={styles.statusApp}>Status: Approved</Text>
        
        </View>
         
              
              
            
      </View>
    );
  }
}