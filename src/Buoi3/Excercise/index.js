import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Alto_icon from '../../../assets/Alto_icon.png';
import Alto_0 from '../../../assets/Alto_0.png';
const data = {
  id: 0,
  title: "Alto's Odyssey",
  icon: Alto_icon,
  subTitle:
    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
  description:
    'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
  age: '9+',
  rating: 4.4,
  preview: Alto_0,
  backgroundColor: '#824671CC',
};
export default class Excercise extends Component {
  gameInfo = {
    title: "Alto's Odyssey",
    icon: Alto_icon,
    subTitle:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.',
    description:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
    preview: Alto_0,
    backgroundColor: '#824671CC',
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.gameInfo.preview} />
        <View
          style={[
            styles.info,
            {backgroundColor: this.gameInfo.backgroundColor},
          ]}>
          <Image source={this.gameInfo.icon} style={styles.icon} />
          <View style={styles.infoContent}>
            <Text style={styles.textInfo}>{this.gameInfo.title}</Text>
            <Text style={styles.textInfo}>{this.gameInfo.subTitle}</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#343434',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    // backgroundColor: data.backgroundColor,
    width: '90%',
    marginTop: 20,
    borderRadius: 10,
    paddingVeritcal: 50,
    marginVertical: 50,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContent: {
    width: '80%',
  },
  textInfo: {
    color: 'white',
    fontWeight: 'bold',
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ffff',
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  bodyImage: {
    width: '100%',
    height: '100%',
  },
  bottom: {
    flex: 1,
  },
  bottomImage: {},
});

// <View style={styles.container}>
//   <View style={styles.header}></View>
//   <View style={styles.body}>
//     <Image
//       style={styles.bodyImage}
//       source={Alto_icon}
//       resizeMode="cover"></Image>
//   </View>
//   <View style={styles.bottom}>
//     <Image
//       style={styles.bottomImage}
//       source={Alto_0}
//       resizeMode="cover"></Image>
//   </View>
// </View>;
