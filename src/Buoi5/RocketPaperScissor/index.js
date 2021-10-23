import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {background, paper, player, computer, scissor, rock} from '../images';
import Button from './Button';
import PlayItem from './PlayItem';
import SelectItem from './SelectItem';
// import Button from './Button';
const index = () => {
  return (
    <ImageBackground
      style={[styles.container, styles.overlay]}
      source={background}>
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeAreaView}>
          <StatusBar barstyle="light-content" />
          <View style={styles.playContainer}>
            <PlayItem selectImage={paper} playerImage={player} />
            <PlayItem selectImage={scissor} playerImage={computer} />
          </View>
          <View style={styles.selectContainer}>
            <SelectItem selectImage={scissor} />
            <SelectItem selectImage={paper} />
            <SelectItem selectImage={rock} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Scores: 0</Text>
            <Text style={styles.infoText}>Times: 9</Text>
          </View>
          <View style={styles.btnContainer}>
            <Button title="Play" colors={['#f9f', '#ff9']} />
            <Button title="Back" colors={['#bff', '#000']} />
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  overlay: {
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // right: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
    /* Lay full width va full height */
    backgroundColor: 'rgba(0, 0, 0,0.5)',
    // flex: 1,
  },
  playContainer: {
    flex: 3,
    // backgroundColor: '#bfb',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 30,
  },
  playItem: {
    // backgroundColor: '#bff',
  },
  selectContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
    // backgroundColor: '#bbf',
  },
  infoContainer: {
    flex: 1,
    // backgroundColor: '#bff',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00ffcc',
  },
  btnContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default index;

// {
//         <ImageBackground
//           style={[styles.container, styles.overlay]}
//           source={background}>
//           <View style={styles.overlay}>
//             <View style={styles.playContainer} />
//             <View style={styles.selectContainer} />
//             <View style={styles.infoContainer} />
//             <View style={styles.btnContainer} />
//           </View>
//         </ImageBackground>;
// }
