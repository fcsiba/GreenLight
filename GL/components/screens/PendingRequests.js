import React, { Component } from "react";
import { StyleSheet, Text,  View, SectionList } from "react-native";

//import styles from 'GL/components/styles';
export default class PendingHistory extends Component {
    static navigationOptions = {
        title: 'Pending Requests',
        headerStyle: { backgroundColor: '#333333'},
        headerTitleStyle: { color: 'white' },
        headerTintColor: 'white' //arrow color
        
      }

/* Function display user data, when user click on sectionlist items */
  GetSectionListItem=(item)=>{
    this.props.navigation.navigate('proreq')
  }

  render() {
    return (
      <View style={styles.container}>
      <SectionList
       sections={[
         { title: 'Pending', data: ['Mahira Khan', 'Shahid Afridi', 'Hadia Usman', 'Umama Rahman', 'Aasma Jabin'] },
         
         
       ]}
       renderItem={ ({item}) => <Text style={styles.SectionListItemS} onPress={this.GetSectionListItem.bind(this, item)}> { item } </Text> }
       keyExtractor={ (item, index) => index }
     />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#e6e6e6"
    },
    SectionHeader:{
      backgroundColor : '#8bc34a', //green light
      fontSize : 20,
      padding: 5,
      color: '#fff',
      fontWeight: 'bold'
   },
    SectionListItemS:{
      fontSize : 20,
      padding: 6,
      marginTop:10,
      color: '#000',
      backgroundColor : '#e6e6e6',
      borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth
  }
});