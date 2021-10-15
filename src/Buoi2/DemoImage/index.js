import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class DemoImage extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Text>Hahsdasd</Text>
        <Text>Hahsdasd</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
