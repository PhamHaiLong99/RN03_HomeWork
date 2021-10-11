import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class DemoFlex extends Component {
  render() {
    return (
      <View>
        <Text>haha</Text>
      </View>
    );
  }
}

/*
 <View style={styles.container}>
        <View style={styles.contentTop}>
          <View style={styles.topItem}></View>
          <View style={styles.topItem}></View>
        </View>
        <View style={styles.contentBottom}>
          <View style={styles.botItem}></View>
          <View style={styles.botItem}></View>
          <View style={styles.botItem}></View>
          <View style={styles.botItem}></View>
        </View>
      </View> 
      


contentBottom: {
    flex: 1,
    backgroundColor: '#96cc96',
    marginBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    borderRadius: 10,
  },
*/
