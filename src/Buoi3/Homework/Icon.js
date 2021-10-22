import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export class Icon extends Component {
  render() {
    return (
      <TouchableOpacity key={index} onPress={this.onPressIcon}>
        <Image style={styles.emoji} source={this.props.iconSource} />
      </TouchableOpacity>
    );
  }
}

export default Icon;
const styles = StyleSheet.create({
  emoji: {
    height: 50,
    width: 50,
    margin: 5,
  },
});

//   <TouchableOpacity key={index} onPress={() => this.onPressIcon(icon)}>
//     <Image style={styles.emoji} source={icon} />
//   </TouchableOpacity>;
