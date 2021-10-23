import React, {Component} from 'react';
import {Text, View} from 'react-native';
import DemoComponentDefault from './src/Buoi1/DemoComponent';
import {DemoComponentNonDefault} from './src/Buoi1/DemoComponentNonDefault';
import DemoStyle from './src/Buoi1/DemoStyle';
import DemoStyleSheet from './src/Buoi2/DemoStyle';
import DemoFlex from './src/Buoi2/DemoFlex';
import DemoImage from './src/Buoi2/DemoImage';
import BindingData from './src/Buoi3/BindingData';
import Excercise from './src/Buoi3/Excercise';
import RenderList from './src/Buoi3/RenderList';
import HomeWorkBuoi_3 from './src/Buoi3/Homework';
import DemoFlatList from './src/Buoi4/DemoFlatList';
// import HomeWorkBuoi_4 from './src/Buoi4/HomeWork';

//Stateful Component
import RocketPaperScissor from './src/Buoi5/RocketPaperScissor';
class App extends Component {
  render() {
    return (
      //
      <DemoFlatList />
      // <RocketPaperScissor />
      // <HomeWorkBuoi_4 />
    );
  }
}

export default App;
