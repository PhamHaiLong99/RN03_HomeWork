import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class GameFriend extends Component {
  render() {
    const {game} = this.props;

    return (
      <View style={[styles.info, {backgroundColor: game.backgroundColor}]}>
        <Image source={game.icon} style={styles.icon} />
        <View style={styles.infoContent}>
          <Text>{game.title}</Text>
          <Text>{game.subTitle}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  info: {
    width: '90%',
    // marginTop: 20,
    // height: '20%',
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginVertical: 10,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  infoContent: {
    width: '90%',
    paddingHorizontal: 10,
    // borderWidth: 1,
  },
});
