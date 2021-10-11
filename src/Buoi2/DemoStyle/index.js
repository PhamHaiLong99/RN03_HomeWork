import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class DemoStyleSheet extends React.Component {
  render() {
    return (
      <View style={{marginTop: 10, flex: 1}}>
        {/* <Text>Demo Style</Text> */}
        <View style={styles.boxStyle}>
          <Text style={styles.textStyle}>Purple:#C9C9FF </Text>
        </View>
        <View style={[styles.boxStyle, styles.boxStyleBlue]}>
          <Text style={styles.textStyle}>Blue: #3D85C6</Text>
        </View>
        <View style={[styles.boxStyle, styles.boxStyleGreen]}>
          <Text style={styles.textStyle}>Green: #96CC96</Text>
        </View>
        <View style={[styles.boxStyle, styles.boxStyleYellow]}>
          <Text style={styles.textStyle}>Yellow: #F4B940</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  boxStyle: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C9C9FF',
    // height: 150,
    // marginTop: 20,
    // marginLeft: 20,
    // marginRight: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    flex: 1,
    //marginVertical:10,
    //marginHorizontal: 10,
    //Tuong tu padingHorizontal
  },
  boxStyleBlue: {
    backgroundColor: '#3D85C6',
  },
  boxStyleGreen: {
    backgroundColor: '#96CC96',
  },
  boxStyleYellow: {
    backgroundColor: '#F4B940',
  },
  textStyle: {
    fontWeight: '900',
  },
});
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
