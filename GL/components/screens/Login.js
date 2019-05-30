import React, {Component} from 'react';
import {Image, View, StatusBar, TouchableOpacity,Text,Alert, TextInput} from 'react-native';
import styles from 'GL/components/styles';
import logogl from 'GL/components/images/logogl.png';
import Icon from 'react-native-vector-icons/Ionicons';


export  default class  Login extends Component{
  // componentDidMount(){
  //   SplashScreen.hide();
  //   }
  constructor(){
    super()
    this.state={
      showPass: true,
      onPress: false
    }
  }
  showPass = ()=>{
    if (this.state.press==false){
      this.setState({showPass:false, press: true})
    }
    else{
      this.setState({showPass:true, press: false})
    } 

  }

  state = {username: "", password: ""};
  static navigationOptions = {
    header: null

  }
    checkLogin(){
    const {username, password} = this.state;
    if(username=='Emp'&& password=='emp'){
      this.props.navigation.navigate('homeE')
    }
    else if(username=='Admin'&& password=='admin'){
      this.props.navigation.navigate('homeA')
    }
    else if(username=='Sec'&& password=='sec'){
      this.props.navigation.navigate('homeS')
    }

    else{
      Alert.alert('Error', 'Ivalid Login credentials',[{text: 'ok'}])
    }
  }



  render() {

    return ( 
      
      <View style={styles.lgcontainer}>
        <StatusBar 
        backgroundColor="#333333"
        barStyle="light-content"   
        />
       <View style={styles.logoContainer}> 
        <Image source={logogl}  style={styles.logogl} />
        </View>

        <View style={styles.inputContainer}>
          <Icon name={'ios-person'} size={28} color=
          {'rgba(255,255,255,0.7)'} style={styles.inputIcon}/>
          <TextInput
          style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
            onChangeText={text=>this.setState({username: text})}
          />
        </View>

        <View style={styles.inputContainer}>
        <Icon name={'ios-lock'} size={28} color=
          {'rgba(255,255,255,0.7)'} style={styles.inputIconLock}/>
          <TextInput
          style={styles.input}
            placeholder={'Password'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
            onChangeText={text=>this.setState({password: text})}
            
          />
     
     <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}> 
        <Icon name ={this.state.press==false ? 'ios-eye':'ios-eye-off'} size={23} color={'rgba(255,255,255,0.3)'}></Icon>
      </TouchableOpacity>
                 
        </View>
        
        
        
      
        <TouchableOpacity style={styles.btn} onPress={_=> this.checkLogin()}>
            <Text style={styles.text}>Login</Text>           
        </TouchableOpacity>

        
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('fp')}>
            <Text style={styles.link}>
              Forgot Password?
            </Text>
            
        </TouchableOpacity>
                   
       
        </View>
         
    );
  }
}
