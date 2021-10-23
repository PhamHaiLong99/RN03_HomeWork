import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export class SelectItem extends Component {
  render() {
    const {selectImage} = this.props;
    return (
      <View style={styles.selectItemContainer}>
        <Image style={styles.selectImage} source={selectImage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selectItemContainer: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffff00',
    borderRadius: 10,
  },
  selectImage: {
    width: 50,
    height: 50,
  },
});
export default SelectItem;
