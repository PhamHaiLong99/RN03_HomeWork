import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class DemoFlex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentTop}>
          <View style={styles.topItem}></View>
          <View style={styles.topItem}></View>
        </View>
        <View style={styles.contentBottom}>
          <View style={styles.botItem}>
            <View style={styles.botItemInner}>
              <View style={styles.botItemInner1}></View>
              <View style={styles.botItemInner1}></View>
              <View style={styles.botItemInner1}></View>
              <View style={styles.botItemInner1}></View>
            </View>
            <View style={styles.botItemInner}></View>
          </View>
          <View style={styles.botItem}>
            <View style={styles.botItemInner}></View>
            <View style={styles.botItemInner}></View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1},
  contentTop: {
    flex: 1,
    backgroundColor: '#96CC96',
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
  },
  contentBottom: {
    flex: 1,
    backgroundColor: '#C9C9FF',
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
    // flexDirection: 'row',
  },
  topItem: {
    backgroundColor: '#F4B940',
    height: '30%',
    borderRadius: 10,
  },
  botItem: {
    flex: 1,
    backgroundColor: '#E14',
    margin: 20,
    flexDirection: 'row',
  },
  botItemInner: {
    flex: 1,
    backgroundColor: '#3D85C6',
    borderRadius: 10,
    margin: 20,
  },

  boxStyle: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C9C9FF',
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
