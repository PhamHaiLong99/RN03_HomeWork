import React, {Component} from 'react';
import {Text, View} from 'react-native';
import DemoComponentDefault from './src/Buoi1/DemoComponent';
import {DemoComponentNonDefault} from './src/Buoi1/DemoComponentNonDefault';
import DemoStyle from './src/Buoi1/DemoStyle';
import DemoStyleSheet from './src/Buoi2/DemoStyle';
import DemoFlex from './src/Buoi2/DemoFlex';
import DemoImage from './src/Buoi2/DemoImage';
//Stateful Component
class App extends Component {
  render() {
    return (
      // <View style={{flex: 1}}>
      //   <View style={{backgroundColor: '#C9C9FF', flex: 1}} />
      //   <View style={{backgroundColor: '#3D85C6', flex: 1}} />
      //   <View style={{backgroundColor: '#96CC96', flex: 1}} />
      //   <View style={{backgroundColor: '#F4B940', flex: 1}} />
      // </View>
      // <DemoFlex />
      <DemoImage />
    );
  }
}

export default App;
