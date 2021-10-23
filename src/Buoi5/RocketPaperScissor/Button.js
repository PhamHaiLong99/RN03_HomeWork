import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export class Button extends Component {
  render() {
    const {title, colors, backgroundColor, isLinear} = this.props;
    /*
        He toa to di tu start -> end ; 
        start gan voi mau bat dau
        end gan voi mau ket thuc.
        */
    /***(Oxy) -- truc x
     *    |
     *   truc y
     * ***/
    if (isLinear) {
      return (
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          style={styles.buttonContainer}
          colors={colors}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>{title}</Text>
          </TouchableOpacity>
        </LinearGradient>
      );
    } else {
      return (
        <TouchableOpacity style={[styles.buttonContainer, {backgroundColor}]}>
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      );
    }
  }
}
Button.defaultProps = {
  colors: ['#fff', '#000'],
  backgroundColor: '#000',
  isLinear: true,
};
const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default Button;
