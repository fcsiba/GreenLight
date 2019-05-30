import React, { Component } from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";
//import styles from 'GL/components/styles';
export default class ReqHistory extends Component {
    static navigationOptions = {
        title: 'Request History',
        headerStyle: { backgroundColor: '#333333'},
        headerTitleStyle: { color: 'white' },
        headerTintColor: 'white' //arrow color
        
      }
      GetSectionListItem=(item)=>{
        this.props.navigation.navigate('viewreq')
      }
    

/* Function display user data, when user click on sectionlist items */
  render() {
    return (
      <View style={styles.container}>
      <SectionList
       sections={[
         
         { title: 'Processed', data: ['Mahira Khan', 'Komal Qidwai', 'Wasfiya Sheikh'] },
         
       ]}
      
    renderItem={ ({item}) => <Text style={styles.SectionListItemS} onPress={this.GetSectionListItem.bind(this, item)}> { item } </Text>}
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
      marginTop:20,
      color: '#000',
      backgroundColor : '#e6e6e6',
      borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth
  }
});