import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {computer, paper, scissor, player} from '../images';

export class PlayItem extends Component {
  render() {
    const {selectImage, playerImage} = this.props;
    return (
      <View style={styles.playItem}>
        <Image style={styles.playerSelect} source={selectImage}></Image>
        <View style={styles.triangle} />
        <Image style={styles.playerImage} source={playerImage}></Image>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  playItem: {
    // backgroundColor: '#bff',
  },
  playerSelect: {
    height: 100,
    width: 100,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#ffff00',
    borderRadius: 10,
    backgroundColor: '#000000',
  },
  playerImage: {
    height: 100,
    width: 100,
  },
  //width: 100 .triangle: 15;
  //position: 50 - 15;
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    // borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderTopWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    // borderBottomColor: '#ffff00',
    borderTopColor: '#ffff00',
    position: 'absolute',
    top: 100,
    left: '35%',
  },
});
export default PlayItem;
