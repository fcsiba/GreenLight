
import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from 'GL/components/screens/Login';
import HomeEmp from 'GL/components/screens/HomeEmp';
import HomeAdmin from 'GL/components/screens/HomeAdmin';
import HomeSec from 'GL/components/screens/HomeSec';
import SubmitRequest from 'GL/components/screens/SubmitRequest';
import ForgotPassword from 'GL/components/screens/ForgotPassword';
import AddNewUser from 'GL/components/screens/AddNewUser';
import ReqHistory from 'GL/components/screens/ReqHistory';
import processRequest from 'GL/components/screens/processRequest';
import PendingRequest from 'GL/components/screens/PendingRequests';
import viewRequest from 'GL/components/screens/viewRequest';
import updateProfile from 'GL/components/screens/updateProfile';
import QRscanner from 'GL/components/screens/QRscanner';
import deleteUser from 'GL/components/screens/deleteUser';

export default class App extends Component{
  componentDidMount(){
    setTimeout(() => {
    SplashScreen.hide();
    },300)
  }
    render(){
      return <AppContainer/>
    }

}

const rootStack = createStackNavigator({
  login: Login, 
  fp: ForgotPassword,
  homeE:HomeEmp,
  homeA:HomeAdmin,
  homeS:HomeSec,
  submitreq: SubmitRequest,
  newuser: AddNewUser,
  reqhis: ReqHistory,
  proreq: processRequest,
  penreq: PendingRequest,
  viewreq: viewRequest,
  updprof: updateProfile,
  qrscan: QRscanner,
  deluser: deleteUser
});
const AppContainer= createAppContainer(rootStack);
  