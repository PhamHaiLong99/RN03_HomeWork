import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class DemoStyle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={boxStyle}>
          <Text style={textStyle}>Purple:#C9C9FF </Text>
        </View>
        <View style={boxStyle}>
          <Text style={textStyle}>Blue: #3D85C6</Text>
        </View>
        <View style={boxStyle}>
          <Text style={textStyle}>Green: #96CC96</Text>
        </View>
        <View style={boxStyle}>
          <Text style={textStyle}>Yellow: #F4B940</Text>
        </View>
      </View>
    );
  }
}
const boxStyle = {
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#C9C9FF',
  height: 150,
  marginTop: 10,
  // marginLeft:
};
const textStyle = {
  fontWeight: '900',
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  purpleContainer: {
    backgroundColor: '#C9C9FF',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    flexGrow: 1,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  blueContainer: {
    backgroundColor: '#3D85C6',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    flexGrow: 1,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  greenContainer: {
    backgroundColor: '#96CC96',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    flexGrow: 1,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  yellowContainer: {
    backgroundColor: '#F4B940',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    flexGrow: 1,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
