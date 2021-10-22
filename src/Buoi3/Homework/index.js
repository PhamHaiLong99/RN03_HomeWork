import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {EMOJI} from '../../constants/Emoji';
export class index extends Component {
  state = {
    listEmoji: EMOJI,
    currentIcon: EMOJI[0].src,
  };
  renderListImage = () => {
    return this.state.listEmoji.map((eachIcon, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() =>
            this.setState({currentIcon: eachIcon.src}, () => {
              console.log(this.state.currentIcon);
            })
          }>
          <Image
            source={eachIcon.src}
            style={{
              width: 40,
              height: 40,
              marginHorizontal: 10,
            }}></Image>
        </TouchableOpacity>
      );
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Bạn đang cảm thấy như thế nào?</Text>
        <Image
          source={this.state.currentIcon}
          style={styles.middleImage}
          resizeMode="cover"
        />
        <View style={styles.listEmoji}>{this.renderListImage()}</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#343434',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '900',
    paddingBottom: 20,
  },
  middleImage: {
    width: 200,
    height: 200,
    paddingBottom: 20,
  },
  listEmoji: {flexDirection: 'row', marginHorizontal: 5, paddingTop: 25},
});
export default index;
