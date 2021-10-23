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
import IconVector from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
export class Header extends Component {
  listHeaderInfo = [
    {
      title: 'Wanda',
      icon: wanda,
    },
    {
      title: 'Yasuo',
      icon: yasuo,
    },
    {
      title: 'Captain',
      icon: captain,
    },
    {
      title: 'Flash',
      icon: flash,
    },
    {
      title: 'Wanda',
      icon: wanda,
    },
  ];
  renderScrollView = () => {
    return this.listHeaderInfo.map((item, index) => (
      <View style={styles.headerContentInner} key={index}>
        <Image source={item.icon} style={styles.imageInside} />
        <Text style={styles.imageTitle}>{item.title}</Text>
      </View>
    ));
  };
  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerTop}>
          <IconVector name="back-in-time" size={25} />
          <Text style={styles.headerTitle}>Danh sách tìm kiếm gần đây</Text>
        </View>
        <ScrollView style={styles.headerContent} horizontal={true}>
          {this.renderScrollView()}
        </ScrollView>
        <View style={styles.headerBottom}>
          <Ionicons name="ios-people" size={25} />
          <Text style={styles.headerTitle}>Gợi ý kết bạn</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
  },
  headerTop: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  headerContent: {
    flexDirection: 'row',
    marginBottom: -10,
  },
  headerContentInner: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  imageInside: {width: 70, height: 70, borderRadius: 35},
  imageTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    paddingLeft: 10,
  },
  headerBottom: {
    marginTop: 0,
    paddingHorizontal: 10,
    flexDirection: 'row',
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
  scrollHorizontal: {justifyContent: 'center', alignItems: 'center'},
});
export default Header;
