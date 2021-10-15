import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

export default class BindingData extends Component {
  //   name = 'React Native 03';
  address = 'TP.HCM';
  state = {
    isLogin: false,
    name: 'Test Name',
  };
  renderName = () => {
    // this.setState({name: 'run Render Name'});
    if (this.state.isLogin) {
      return (
        <>
          <Text>{this.name}</Text>
          <Text>{this.address}</Text>
        </>
      );
    }
  };
  onPressButton = () => {
    console.log('Button Press');
    // this.isLogin = true;
    //Con tro this la con tro cua lop.
    this.setState({isLogin: true}, () => {
      console.log(this.state.isLogin);
    });
    // console.log(this.state.isLogin);
  };
  // Anonymous Function ko su dung dc con tro
  //this do no la global
  //regular function
  onPress() {
    //this.setState no khong phai la cua class
    //ma la con tro global
  }
  render() {
    console.log('render');
    return (
      <View style={styles.container}>
        <Text> BindingData Component </Text>
        {/* {this.state.isLogin ? (
          <>
            <Text>{this.name}</Text>
            <Text>{this.address}</Text>
          </>
        ) : null} */}
        {this.state.isLogin && (
          <>
            <Text>{this.name}</Text>
            <Text>{this.address}</Text>
          </>
        )}
        {/* {this.renderName()} */}
        {/* <Button title="Sign In" color="red" /> */}
        <TouchableOpacity style={styles.btn} onPress={this.onPressButton}>
          <Text>Sign In</Text>
        </TouchableOpacity>
        <TouchableHighlight
          underlayColor="gray"
          style={[styles.btn, styles.btnHighlight]}
          onPress={this.onPressButton}>
          <Fragment>
            <Text>Sign In</Text>
          </Fragment>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    // backgroundColor: 'red',
    height: 50,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#bfb',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  btnHighlight: {
    backgroundColor: '#bbf',
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
  },
});
