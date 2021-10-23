import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class GameInfo extends Component {
  render() {
    const {game} = this.props;

    return (
      <View style={[styles.info, {backgroundColor: game.backgroundColor}]}>
        <Image source={game.icon} style={styles.icon} />
        <View style={styles.infoContent}>
          <Text style={styles.friendName}>{game.title}</Text>
          <Text style={styles.textSubTitle}>{game.subTitle}</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnFriend}>
            <Text style={styles.btnInfo}>Kết bạn</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  info: {
    width: '90%',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  icon: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#fff',
    // marginLeft: 20,
  },
  infoContent: {
    width: '60%',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  friendName: {fontWeight: 'bold', fontSize: 18, color: '#000'},
  textSubTitle: {color: '#4c4c4c', fontWeight: '600'},
  btnContainer: {
    justifyContent: 'center',
  },
  btnFriend: {
    height: 30,
    width: 70,
    borderRadius: 15,
    backgroundColor: '#bbf',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnInfo: {
    color: '#3a3a50',
    fontWeight: '600',
  },
});
