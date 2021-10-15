import React, {Component, StyleSheet} from 'react';
import {Text, View, Button} from 'react-native';

export default class index extends Component {
  name = 'React Native 03';
  address = 'TP.HCM';
  isShowName = false;
  renderName() {
    if (this.isShowName) {
      return <Text>{this.name}</Text>;
    }
    return <Text>{this.address}</Text>;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> BindingData Component </Text>
        {this.renderName()}
        <Button title="Sign In" color="red" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    backgroundColor: 'red',
  },
});
