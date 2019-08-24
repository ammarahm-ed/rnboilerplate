/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import NavigationService, {AppContainer} from "./src/services/NavigationService"


export default class App extends Component {
  static navigationOptions = { header: null };
  render() {
   return  (<AppContainer
   ref={navigatorRef => {
     NavigationService.setTopLevelNavigator(navigatorRef);
   }}
 />
    )
  } 
};

