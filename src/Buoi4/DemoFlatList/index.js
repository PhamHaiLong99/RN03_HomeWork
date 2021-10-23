import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  SectionList,
  ScrollView,
} from 'react-native';
import Alto_icon from '../../../assets/Alto_icon.png';
import Alto_0 from '../../../assets/Alto_0.png';
import Game from './Game';
import {
  blackwindow,
  captain,
  flash,
  ironman,
  spiderman,
  strange,
  suppergirl,
  wanda,
  wonderwoman,
  yasuo,
} from './images';

import Header from './Header';
export default class DemoFlatList extends Component {
  listGameInfo = [
    {
      title: 'Strange',
      icon: strange,
      subTitle: '15 bạn chung',
      preview: Alto_0,
      backgroundColor: '#ddd',
    },

    {
      title: 'Kara',
      icon: suppergirl,
      subTitle: '15 bạn chung',
      preview: Alto_0,
      backgroundColor: '#ddd',
    },
    {
      title: 'Diana',
      icon: wonderwoman,
      subTitle: '15 bạn chung',
      preview: Alto_0,
      backgroundColor: '#ddd',
    },
    {
      title: 'Natasha',
      icon: blackwindow,
      subTitle: '15 bạn chung',
      preview: Alto_0,
      backgroundColor: '#ddd',
    },

    {
      title: 'Strange',
      icon: strange,
      subTitle: '15 bạn chung',
      preview: Alto_0,
      backgroundColor: '#ddd',
    },
    {
      title: 'Kara',
      icon: suppergirl,
      subTitle: '15 bạn chung',
      preview: Alto_0,
      backgroundColor: '#ddd',
    },
    {
      title: 'Diana',
      icon: wonderwoman,
      subTitle: '15 bạn chung',
      preview: Alto_0,
      backgroundColor: '#dddddd',
    },

    {
      title: 'Natasha',
      icon: blackwindow,
      subTitle: '15 bạn chung',
      preview: Alto_0,
      backgroundColor: '#dddddd',
    },
    {
      title: 'Strange',
      icon: strange,
      subTitle: '15 bạn chung',
      preview: Alto_0,
      backgroundColor: '#dddddd',
    },
  ];

  renderItem = ({item}) => <Game game={item} />;

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.scrollContainer}>
          <FlatList
            contentContainerStyle={styles.scrollContent}
            data={this.listGameInfo}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `${item.title}_${index}`}
          />
        </View>
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  scrollContainer: {
    marginHorizontal: 10,
    flex: 4,
  },
  scrollContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
});
